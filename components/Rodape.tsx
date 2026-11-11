import Link from 'next/link';
import { SLUGS } from '@/content/produtos';
import { PILARES } from '@/content/pilares';
import { CNPJ, EMAIL, HORARIO, UNIDADES, WHATSAPP, WHATSAPP_SINISTRO } from '@/content/empresa';

/**
 * Rodapé de todas as páginas. Carrega a declaração de corretora, o CNPJ e a
 * CNSP 382/2020 — exigências que não podem sumir de nenhuma tela. O ano é
 * calculado, nunca digitado (era o problema P11 do diagnóstico).
 */
export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="env">
        <div className="rodape__topo">
          <div className="pilha g16">
            <span className="logo logo--neg" role="img" aria-label="MX Corretora de Seguros"></span>
            <div className="pilha g12">
              <p className="rodape__linha"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg>
                <span><span className="rodape__rot">Cotação, apólice e dúvidas</span><a href={WHATSAPP.link}><b className="num">{WHATSAPP.numero}</b></a></span></p>
              <p className="rodape__linha"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-alerta" /></svg>
                <span><span className="rodape__rot">Só para sinistro</span><a href={WHATSAPP_SINISTRO.link}><b className="num">{WHATSAPP_SINISTRO.numero}</b></a></span></p>
              <p className="rodape__linha"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-mail" /></svg>
                <span><span className="rodape__rot">E-mail</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></p>
            </div>
          </div>

          <div>
            <h4>Soluções</h4>
            <ul>
              {PILARES.map((p) => (
                <li key={p.id}><Link href={p.rota}>{p.rotuloMenu}</Link></li>
              ))}
              <li><Link href="/seguros"><b>Ver os {SLUGS.length} seguros</b></Link></li>
            </ul>
          </div>

          <div>
            <h4>A MX</h4>
            <ul>
              <li><Link href="/a-mx">Sobre nós</Link></li>
              <li><Link href="/sinistro">Sinistro e assistência 24h</Link></li>
              <li><Link href="/guias">Guias de plano de saúde</Link></li>
              <li><Link href="/contato">Contato</Link></li>
              <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
              <li><Link href="/cnsp-382-2020">Resolução CNSP 382/2020</Link></li>
            </ul>
          </div>

          <div className="pilha g20">
            <div>
              <h4>Unidades</h4>
              <ul>
                {UNIDADES.map((u) => (
                  <li key={u.cidade}>
                    <span className="rodape__rot">{u.selo}</span>
                    {u.rua} — {u.bairro}
                    <br />
                    {u.cidade}/{u.uf} · CEP {u.cep}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Horário</h4>
              <p>{HORARIO}</p>
            </div>
          </div>
        </div>

        <p className="rodape__legal">
          MX Corretora de Seguros · CNPJ {CNPJ}.{' '}
          A MX é corretora: não assume riscos nem administra planos, e a contratação é feita com a
          seguradora ou a operadora. Consórcio é intermediado junto a administradoras autorizadas
          pelo Banco Central e não é seguro nem investimento.
        </p>

        <div className="rodape__base">
          <span>© {new Date().getFullYear()} MX Corretora de Seguros. Todos os direitos reservados.</span>
          <Link href="/politica-de-privacidade">Privacidade</Link>
          <Link href="/cnsp-382-2020">CNSP 382/2020</Link>
          <Link href="/politica-de-privacidade">LGPD</Link>
        </div>
      </div></footer>
  );
}
