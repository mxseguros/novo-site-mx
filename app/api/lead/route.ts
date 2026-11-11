import { entregar } from '@/lib/leads/sink';
import { TIPOS_DE_LEAD, type PedidoDeLead, type RespostaDeLead } from '@/lib/leads/tipos';
import { validaNome, validaTelefone } from '@/lib/mascaras';

/**
 * Entrada única dos formulários do site: cotação, contato e pedido de comissão.
 *
 * Valida de novo no servidor, descarta robô pelo honeypot, limita envios por IP
 * e devolve um protocolo. O mesmo pedido enviado duas vezes em seguida recebe o
 * mesmo protocolo e não sai duas vezes. Os controles em memória valem por
 * instância — são freio, não garantia; a defesa de verdade contra abuso é o
 * firewall da hospedagem.
 */

const LIMITE_POR_IP = 6;
const JANELA_MS = 10 * 60 * 1000;
const MAX_CAMPOS = 30;
const MAX_TEXTO = 2000;

const envios = new Map<string, number[]>();
const recentes = new Map<string, { protocolo: string; quando: number }>();

function limpaVencidos(agora: number) {
  for (const [ip, tempos] of envios) {
    const vivos = tempos.filter((t) => agora - t < JANELA_MS);
    if (vivos.length) envios.set(ip, vivos);
    else envios.delete(ip);
  }
  for (const [chave, r] of recentes) if (agora - r.quando > JANELA_MS) recentes.delete(chave);
}

function novoProtocolo(agora: Date) {
  const data = agora.toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' }).slice(2).replaceAll('-', '');
  const sufixo = crypto.randomUUID().replaceAll('-', '').slice(0, 4).toUpperCase();
  return `MX-${data}-${sufixo}`;
}

const texto = (v: unknown, max = MAX_TEXTO) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

function ler(corpo: unknown): PedidoDeLead | string {
  if (!corpo || typeof corpo !== 'object') return 'Pedido inválido.';
  const c = corpo as Record<string, unknown>;

  const tipo = TIPOS_DE_LEAD.find((t) => t === c.tipo);
  if (!tipo) return 'Pedido inválido.';
  if (c.consentimento !== true) return 'Marque a autorização de contato para enviar.';

  const nome = texto(c.nome, 120);
  const fone = texto(c.fone, 30);
  const erro = validaNome(nome) ?? validaTelefone(fone);
  if (erro) return erro;

  const campos: [string, string][] = [];
  if (Array.isArray(c.campos)) {
    for (const par of c.campos.slice(0, MAX_CAMPOS)) {
      if (!Array.isArray(par)) continue;
      const rotulo = texto(par[0], 120);
      const valor = texto(par[1]);
      if (rotulo && valor) campos.push([rotulo, valor]);
    }
  }

  return {
    tipo,
    assunto: texto(c.assunto, 160) || 'Não informado',
    nome,
    fone,
    campos,
    pagina: texto(c.pagina, 300),
    consentimento: true,
    site: texto(c.site, 300),
  };
}

const responde = (corpo: RespostaDeLead, status = 200) => Response.json(corpo, { status });

export async function POST(request: Request) {
  let corpo: unknown;
  try {
    corpo = await request.json();
  } catch {
    return responde({ ok: false, erro: 'Pedido inválido.' }, 400);
  }

  const lead = ler(corpo);
  if (typeof lead === 'string') return responde({ ok: false, erro: lead }, 400);

  const agora = new Date();
  // Robô preencheu o campo invisível: responde como se fosse sucesso e não entrega.
  if (lead.site) return responde({ ok: true, protocolo: novoProtocolo(agora) });

  limpaVencidos(agora.getTime());

  const chave = JSON.stringify([lead.tipo, lead.assunto, lead.fone.replace(/\D/g, ''), lead.campos]);
  const repetido = recentes.get(chave);
  if (repetido) return responde({ ok: true, protocolo: repetido.protocolo });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'desconhecido';
  const tempos = envios.get(ip) ?? [];
  if (tempos.length >= LIMITE_POR_IP) {
    return responde({ ok: false, erro: 'Muitos envios em sequência. Fale com a MX pelo WhatsApp.' }, 429);
  }

  const protocolo = novoProtocolo(agora);
  let entregue = false;
  try {
    entregue = await entregar(lead, protocolo);
  } catch (e) {
    console.error('[lead] falha ao entregar', protocolo, e);
  }

  if (!entregue) {
    return responde({ ok: false, protocolo, erro: 'O envio pelo site não funcionou agora.' }, 503);
  }

  envios.set(ip, [...tempos, agora.getTime()]);
  recentes.set(chave, { protocolo, quando: agora.getTime() });
  return responde({ ok: true, protocolo });
}
