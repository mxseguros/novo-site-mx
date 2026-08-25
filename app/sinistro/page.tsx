import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sinistro e Assistência 24h',
  description: 'Telefone da assistência 24h de cada seguradora parceira, aberto na tela.',
};

export default function Pagina() {
  return (
    <>
      <section style={{ background: 'var(--socorro)', color: '#fff', paddingBlock: 'clamp(1.75rem,4cqi,2.75rem)' }} className="">
          <div className="env pilha g20">
            <span className="olho" style={{ color: 'rgba(255,255,255,.82)' }}>Emergência</span>
            <h1 style={{ color: '#fff' }}>Aconteceu alguma coisa. Comece por aqui.</h1>
            <div className="grade grade--2" style={{ gap: '.7rem' }}>
              <a className="card" href="https://wa.me/5519982036147" style={{ background: 'rgba(0,0,0,.2)', borderColor: 'rgba(255,255,255,.28)', gap: '.15rem', textDecoration: 'none' }}>
                <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.85)' }}>Abrir sinistro com a MX · WhatsApp</span>
                <b className="num" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '500', letterSpacing: '-.02em' }}>(19) 98203-6147</b>
              </a>
              <a className="card" href="#tabela-assistencia" style={{ background: 'rgba(0,0,0,.2)', borderColor: 'rgba(255,255,255,.28)', gap: '.15rem', textDecoration: 'none' }}>
                <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.85)' }}>Guincho, chaveiro, pane — assistência 24h</span>
                <b style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '500', letterSpacing: '-.02em' }}>Achar o telefone da minha seguradora →</b>
              </a>
            </div>
            <p style={{ color: 'rgba(255,255,255,.92)', fontSize: '.9375rem', maxWidth: '68ch' }}>Se houver ferido, ligue primeiro para o <b style={{ color: '#fff' }}>SAMU 192</b> ou <b style={{ color: '#fff' }}>Bombeiros 193</b>. Em caso de roubo ou colisão com terceiro, registre o boletim de ocorrência antes de acionar a seguradora.</p>
          </div>
        </section>
      
        <section className="secao--curta">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Primeiras 24 horas</span>
              <h2>O que fazer, na ordem</h2>
            </div>
            <div className="passos">
              <div className="passo"><h4>Garanta a segurança</h4><p>Sinalize o local, saia da pista se possível e cuide de quem se machucou. Ferido tem prioridade sobre qualquer telefonema.</p></div>
              <div className="passo"><h4>Registre a ocorrência</h4><p>Boletim de ocorrência em roubo, furto, incêndio e colisão com terceiro. Fotografe tudo antes de mexer.</p></div>
              <div className="passo"><h4>Acione a assistência</h4><p>Guincho e reboque saem pela assistência 24h da seguradora, não pela corretora. Os telefones estão logo abaixo.</p></div>
              <div className="passo"><h4>Avise a MX</h4><p>Mande a documentação pelo WhatsApp de sinistro. A partir daí, é a corretora que fala com a seguradora.</p></div>
            </div>
          </div>
        </section>
      
        <section className="secao cinza" id="tabela-assistencia">
          <div className="env pilha g16">
            <div className="pilha g8">
              <span className="olho">Assistência 24 horas</span>
              <h2>Telefone das seguradoras, aberto na tela</h2>
              <p className="lide medida">Sem acordeão, sem clique. Busque pelo nome da seguradora que está na sua apólice.</p>
            </div>
            <label className="campo-busca" style={{ maxWidth: '24rem' }}>
              <span className="oculto">Buscar seguradora</span>
              <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-lupa" /></svg>
              <input type="search" id="busca-seguradora" placeholder="Buscar seguradora — ex.: Tokio" autoComplete="off" />
            </label>
            <div className="rolagem" style={{ background: '#fff', border: '1px solid var(--linha)', borderRadius: 'var(--raio-card)' }}>
              <table className="assist" id="tab-assist">
                <thead><tr><th scope="col">Seguradora</th><th scope="col">Assistência 24h e sinistros</th></tr></thead>
                <tbody>
                  <tr><td>Allianz Seguros</td><td className="num"><a href="tel:+5508000130700">08000 130 700</a></td></tr>
                  <tr><td>Azul Seguros</td><td className="num"><a href="tel:+5540043700">4004 3700 (grandes centros) · 0800 703 0203</a></td></tr>
                  <tr><td>Bradesco Seguros</td><td className="num"><a href="tel:+5540042757">4004 2757 (grandes centros) · 0800 701 2757</a></td></tr>
                  <tr><td>HDI Seguros</td><td className="num"><a href="tel:+5530035390">3003 5390 (grandes centros) · 0800 434 4340</a></td></tr>
                  <tr><td>Itaú Seguros</td><td className="num"><a href="tel:+5530031010">3003 1010 (regiões metropolitanas) · 0800 720 1010</a></td></tr>
                  <tr><td>Mapfre</td><td className="num"><a href="tel:+5540040101">4004 0101 (regiões metropolitanas) · 0800 775 4545</a></td></tr>
                  <tr><td>MSIG · Mitsui Sumitomo</td><td className="num"><a href="tel:+5508007077883">0800 707 7883</a> · Central e sinistros 0300 772 6744</td></tr>
                  <tr><td>Sompo Seguros <span className="chip-conf">a confirmar</span></td><td className="num"><a href="tel:+5508000162727">0800 016 2727</a> · Central Brasil 0800 771 9119</td></tr>
                  <tr><td>Tokio Marine</td><td className="num"><a href="tel:+5508003186546">0800 31 86546 (auto e residencial)</a> · Vidros 0800 707 8005</td></tr>
                  <tr><td>Yelum Seguradora</td><td className="num"><a href="tel:+5540045423">4004 5423 (regiões metropolitanas) · 0800 701 4120</a></td></tr>
                  <tr><td>Zurich Seguros <span className="chip-conf">a confirmar</span></td><td className="num"><a href="tel:+5508007291400">0800 729 1400</a> · Sinistro 0800 777 2746 · Central 4000 1246</td></tr>
                </tbody>
              </table>
            </div>
            <p className="nota">Telefones conferidos na página de assistência da MX em 21/08/2026. Antes da publicação, cada linha é confirmada com a seguradora; as duas marcadas como <b>a confirmar</b> têm blocos sobrepostos na origem.</p>
            <p className="painel__vazio" id="assist-vazia" role="status">Não achamos essa seguradora na lista. Chame a MX no WhatsApp de sinistro que a gente localiza o número da sua apólice.</p>
            {/* Os dois boxes se alinham por construção: mesma estrutura
                olho → h3 → texto, e a ação empurrada para o rodapé do card
                com margin-top auto, para os botões baterem mesmo quando os
                textos tiverem alturas diferentes. */}
            <div className="grade grade--2">
              <div className="oferta oferta--faixa" style={{ minHeight: 'auto' }}>
                <span className="olho">Suporte da MX</span>
                <h3>Prefere escrever?</h3>
                <p>
                  Mande a documentação e o número da apólice por e-mail. Respondemos no
                  próximo dia útil — para urgência, use a assistência 24h da seguradora
                  acima.
                </p>
                <div className="acoes" style={{ marginTop: 'auto', paddingTop: '.9rem' }}>
                  <a className="btn btn--azul" href="mailto:mxseguros@mxseguros.com.br">
                    mxseguros@mxseguros.com.br
                  </a>
                </div>
              </div>

              <div className="oferta oferta--socorro oferta--faixa" style={{ minHeight: 'auto' }}>
                <span className="olho">WhatsApp de sinistro</span>
                <h3>Não achou a sua seguradora na lista?</h3>
                <p>
                  Chame a MX no WhatsApp de sinistro que a gente localiza o telefone da
                  assistência pela sua apólice. Se o número que você tem em mãos não
                  atender, avise — a tabela é conferida a cada seis meses.
                </p>
                <div className="acoes" style={{ marginTop: 'auto', paddingTop: '.9rem' }}>
                  <a className="btn btn--zap num" href="https://wa.me/5519982036147">
                    <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
                      <use href="#i-zap" />
                    </svg>{' '}
                    (19) 98203-6147
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
