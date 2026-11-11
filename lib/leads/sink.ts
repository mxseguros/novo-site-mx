import type { PedidoDeLead } from './tipos';

/**
 * Ponto único de saída do lead. Trocar de destino depois — gravar em banco,
 * mandar para um CRM — é trocar esta função, não mexer nos formulários.
 *
 * Hoje: e-mail para a equipe, pela API do Resend. Variáveis de ambiente:
 *   RESEND_API_KEY   chave da conta no Resend
 *   LEAD_EMAIL_PARA  quem recebe (aceita vários, separados por vírgula)
 *   LEAD_EMAIL_DE    remetente num domínio verificado no Resend,
 *                    como "Site MX <site@mxseguros.com.br>"
 *
 * Sem as três, devolve false e o formulário oferece o WhatsApp no lugar.
 */

export const destinoConfigurado = () =>
  Boolean(process.env.RESEND_API_KEY && process.env.LEAD_EMAIL_PARA && process.env.LEAD_EMAIL_DE);

const ROTULO_DO_TIPO = {
  cotacao: 'Cotação',
  contato: 'Contato',
  cnsp: 'Comissão (CNSP 382/2020)',
} as const;

export function textoDoLead(lead: PedidoDeLead, protocolo: string) {
  const linhas = [
    `Protocolo: ${protocolo}`,
    `Tipo: ${ROTULO_DO_TIPO[lead.tipo]}`,
    `Assunto: ${lead.assunto}`,
    '',
    `Nome: ${lead.nome}`,
    `WhatsApp/telefone: ${lead.fone}`,
    ...lead.campos.map(([rotulo, valor]) => `${rotulo}: ${valor}`),
    '',
    `Página: ${lead.pagina}`,
    `Consentimento de contato: sim, em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`,
  ];
  return linhas.join('\n');
}

export async function entregar(lead: PedidoDeLead, protocolo: string): Promise<boolean> {
  if (!destinoConfigurado()) return false;

  const email = lead.campos.find(([rotulo]) => /e-?mail/i.test(rotulo))?.[1];

  const resposta = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      // o Resend descarta reenvio com a mesma chave em 24 horas
      'Idempotency-Key': protocolo,
    },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_DE,
      to: process.env.LEAD_EMAIL_PARA!.split(',').map((e) => e.trim()),
      subject: `[Site] ${ROTULO_DO_TIPO[lead.tipo]} · ${lead.assunto} · ${lead.nome} (${protocolo})`,
      text: textoDoLead(lead, protocolo),
      ...(email ? { reply_to: email } : {}),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!resposta.ok) {
    console.error('[lead] Resend recusou o envio', protocolo, resposta.status, await resposta.text());
    return false;
  }
  return true;
}
