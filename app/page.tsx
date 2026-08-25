import Link from 'next/link';
import Hero from '@/components/Hero';
import VitrineProdutos from '@/components/VitrineProdutos';
import FormCotacao from '@/components/FormCotacao';
import MapaUnidade from '@/components/MapaUnidade';

/**
 * Home — portada do protótipo aprovado no Portão G2.
 *
 * As seções estáticas vieram da marcação do protótipo; hero, vitrine de
 * produtos e formulário viraram componentes de cliente porque têm estado.
 * Os links de produto apontam para /seguros/[slug] e saem do produtos.ts —
 * nenhum destino é digitado à mão.
 */
export default function Home() {
  return (
    <>
      <Hero />

      {/* Números / prova */}
        <section className="numeros">
          <div className="env">
            <div className="numeros__grade">
              <div className="numeros__item">
                <span className="numeros__n num">24</span>
                <span className="numeros__t">anos de mercado</span>
                <span className="numeros__d">Atuando em seguros desde 2002</span>
              </div>
              <div className="numeros__item">
                <span className="numeros__n num">+40</span>
                <span className="numeros__t">seguradoras parceiras</span>
                <span className="numeros__d">Uma cotação, dezenas de propostas comparadas</span>
              </div>
              <div className="numeros__item">
                <span className="numeros__n num">2</span>
                <span className="numeros__t">escritórios de porta aberta</span>
                <span className="numeros__d">Itapira e Águas de Lindóia</span>
              </div>
            </div>
          </div>
        </section>

      <VitrineProdutos />

      {/* Cards cinza — padrao de oferta */}
        <section className="secao--curta">
          <div className="env pilha g16">
            <div className="grade grade--3">
              <a className="oferta" href="#cotar">
                <span className="olho">Cotação</span>
                <h3>Uma cotação, mais de 40 seguradoras</h3>
                <p>Você preenche uma vez. A MX manda o mesmo risco para as parceiras e compara as propostas.</p>
                <span className="seta">Cotar agora <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span>
              </a>
              <a className="oferta" href="#cotar">
                <span className="olho">Renovação</span>
                <h3>Vence em 30 dias? Dá tempo</h3>
                <p>Recotamos o mercado antes do vencimento, sem você perder bônus nem ficar um dia sem cobertura.</p>
                <span className="seta">Avisar meu vencimento <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span>
              </a>
              <Link className="oferta oferta--socorro" href="/sinistro">
                <span className="olho">Sinistro</span>
                <h3>Aconteceu alguma coisa</h3>
                <p>Telefone da assistência 24h da sua seguradora e WhatsApp direto com a corretora.</p>
                <span className="seta seta--socorro">Abrir sinistro <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span>
              </Link>
            </div>
            <div className="grade grade--2">
              <div className="oferta oferta--larga">
                <span className="olho">Canais</span>
                <h3>São dois números, e cada um tem um dono</h3>
                <p>Um resolve tudo — cotação, apólice, boleto, dúvida. O outro é só para sinistro, e por isso não fica preso em conversa de venda.</p>
                <div className="acoes" style={{ marginTop: 'auto', paddingTop: '.7rem' }}>
                  <a className="btn btn--zap btn--peq num" href="https://wa.me/551938638150"><svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><use href="#i-zap" /></svg> (19) 3863-8150</a>
                  <a className="btn btn--socorro btn--peq num" href="https://wa.me/5519982036147">(19) 98203-6147 · sinistro</a>
                </div>
              </div>
              <a className="oferta oferta--larga oferta--azul" href="#unidades">
                <span className="olho" style={{ color: 'var(--sage)' }}>Unidades</span>
                <h3>Você pode simplesmente entrar</h3>
                <p>Av. Rio Branco, 221, em Itapira, e Rua Argentina, 15, em Águas de Lindóia. De segunda a sexta, das 08:00 às 18:00.</p>
                <span className="seta seta--neg">Ver endereços e mapa <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span>
              </a>
            </div>
          </div>
        </section>

      <FormCotacao />

      {/* Destaque saude empresarial — o beneficio de maior retorno */}
        <section className="secao">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}>
              <div className="pilha g16">
                <span className="olho">Saúde para empresas</span>
                <h2>Todo seguro espera o pior. A saúde trabalha todo mês.</h2>
                <p className="lide">O único benefício que a empresa contrata torcendo para ser usado.</p>
                <ul className="lista-v">
                  <li>A MX compara operadoras, rede credenciada e carência antes de a empresa assinar.</li>
                  <li>Portabilidade de carências para quem já vem de outro plano, quando os requisitos são cumpridos.</li>
                  <li>Coparticipação avaliada caso a caso, para baixar a mensalidade sem derrubar a rede.</li>
                  <li>Recotação do contrato antes do vencimento, todo ano.</li>
                </ul>
                <div className="acoes">
                  <a className="btn btn--azul" href="#cotar">Cotar plano para o meu time</a>
                  <a className="btn btn--zap" href="https://wa.me/551938638150"><svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true"><use href="#i-zap" /></svg> Falar com um consultor</a>
                </div>
              </div>
              <div className="foto-larga" style={{ backgroundImage: 'var(--f-ph-saude)', backgroundPosition: '60% center' }} role="img" aria-label="Profissional de saúde em atendimento a um paciente"></div>
            </div>
          </div>
        </section>

      {/* Sinistro */}
        <section className="secao escuro">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}>
              <div className="pilha g16">
                <span className="olho" style={{ color: 'var(--sage)' }}>Já é cliente e precisa agora</span>
                <h2>Sinistro e assistência 24 horas</h2>
                <p className="lide">O telefone da assistência da sua seguradora fica aberto na tela, sem clique e sem acordeão. A página abre em conexão ruim e pode ser salva no celular.</p>
                <div className="acoes">
                  <Link className="btn btn--socorro" href="/sinistro">Abrir sinistro e assistência</Link>
                  <a className="btn btn--zap num" href="https://wa.me/5519982036147"><svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true"><use href="#i-zap" /></svg> (19) 98203-6147</a>
                </div>
              </div>
              <div className="pilha g12">
                <div className="card" style={{ background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.18)' }}>
                  <h4 style={{ color: '#fff' }}>Nas primeiras 24 horas</h4>
                  <ul className="lista-v" style={{ color: 'var(--neg-fraco)' }}>
                    <li>Ferido primeiro: SAMU 192 ou Bombeiros 193</li>
                    <li>Boletim de ocorrência em roubo, furto e colisão com terceiro</li>
                    <li>Guincho sai pela assistência da seguradora, não pela corretora</li>
                    <li>Documentação pelo WhatsApp de sinistro — daí em diante é a MX que fala</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Seguradoras */}
        <section className="secao">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Seguradoras parceiras</span>
              <h2>A seguradora certa que atende a sua necessidade</h2>
            </div>
            <div className="logos">
              <div className="logos__item"><img src="/seguradoras/seg_azul.webp" alt="Azul Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_sulamerica.webp" alt="SulAmérica" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_mitsui.webp" alt="Mitsui Sumitomo Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_tokio.webp" alt="Tokio Marine Seguradora" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_hdi.webp" alt="HDI Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_yelum.svg" alt="Yelum Seguradora" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_allianz.webp" alt="Allianz Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_zurich.webp" alt="Zurich Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_sompo.webp" alt="Sompo Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_porto.webp" alt="Porto Seguro" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_chubb.webp" alt="Chubb Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_bradesco.webp" alt="Bradesco Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_norden.svg" alt="Norden" /></div>
            </div>
            <p className="nota">Nem toda seguradora opera todos os ramos. Na sua cotação entram as que trabalham com o produto que você procura.</p>
          </div>
        </section>

      {/* Depoimentos — avaliações reais do perfil da MX no Google.
          O texto é transcrito literalmente: não reescrever, não resumir,
          não corrigir. São palavras de terceiros identificados. */}
        <section className="secao cinza">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Quem já é cliente</span>
              <h2>Conheça alguns dos nossos milhares de clientes satisfeitos</h2>
            </div>
            <div className="grade grade--3">
              <figure className="depo">
                <span className="depo__ramo">Avaliação no Google</span>
                <blockquote>Trabalho de excelência, sempre superando as expectativas. Agradeço ao Natã pelo excelente atendimento.</blockquote>
                <figcaption className="depo__pe">
                  <span className="depo__av" aria-hidden="true">T</span>
                  <span className="depo__quem">
                    <b>Tammy</b>
                    <span className="depo__meta">2 avaliações · há 2 anos</span>
                  </span>
                </figcaption>
              </figure>
              <figure className="depo">
                <span className="depo__ramo">Avaliação no Google</span>
                <blockquote>Ótimos profissionais com muita atenção para com a gente.</blockquote>
                <figcaption className="depo__pe">
                  <span className="depo__av" aria-hidden="true">MV</span>
                  <span className="depo__quem">
                    <b>Marcos Vieira</b>
                    <span className="depo__meta">Local Guide · 32 avaliações · há 2 anos</span>
                  </span>
                </figcaption>
              </figure>
              <figure className="depo">
                <span className="depo__ramo">Avaliação no Google</span>
                <blockquote>Melhor atendimento, profissionais competentes e muito educados.</blockquote>
                <figcaption className="depo__pe">
                  <span className="depo__av" aria-hidden="true">RB</span>
                  <span className="depo__quem">
                    <b>Rubens Bozio</b>
                    <span className="depo__meta">Local Guide · 17 avaliações · há 7 anos</span>
                  </span>
                </figcaption>
              </figure>
            </div>
            <p className="nota">
              Avaliações publicadas no perfil da MX Corretora de Seguros no Google, por
              clientes identificados.{' '}
              <a href="https://share.google/ftBOp0uBpji8cZr16" target="_blank" rel="noopener">
                Ver todas no Google
              </a>
              .
            </p>
          </div>
        </section>

      {/* Sobre a MX */}
        <section className="secao" id="a-mx">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}>
              <div className="pilha g16">
                <span className="olho">A MX</span>
                <h2>Consultores que moram onde os clientes moram</h2>
                <p>Formada por consultores experientes e preparados, atuando no mercado de seguros desde 2002 com eficiência, inovação e preços competitivos, a MX Seguros é uma das principais empresas do ramo de seguro na região.</p>
                <div className="grade grade--2" style={{ gap: '.75rem' }}>
                  <div className="oferta" style={{ minHeight: 'auto', padding: '1.1rem 1.2rem' }}>
                    <span className="olho">Missão</span>
                    <p style={{ fontSize: '.9375rem' }}>Através da excelência no atendimento, levar segurança e tranquilidade aos nossos clientes.</p>
                  </div>
                  <div className="oferta" style={{ minHeight: 'auto', padding: '1.1rem 1.2rem' }}>
                    <span className="olho">Visão</span>
                    <p style={{ fontSize: '.9375rem' }}>Ser referência no mercado de seguros, em constante evolução em tecnologia e inovação.</p>
                  </div>
                </div>
                <div className="chip-lista">
                  <span className="chip">Ética</span><span className="chip">Pontualidade</span><span className="chip">Transparência</span>
                  <span className="chip">Integridade</span><span className="chip">Comprometimento</span>
                </div>
                <Link className="seta" href="/a-mx">Conhecer a MX <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></Link>
              </div>
              <div className="foto-larga" style={{ backgroundImage: 'var(--f-foto-equipe)' }} role="img" aria-label="Consultores da MX em atendimento"></div>
            </div>
            <p className="nota" style={{ paddingTop: '.9rem' }}>Atendimento presencial em Itapira e em Águas de Lindóia, de segunda a sexta, das 08:00 às 18:00.</p>
          </div>
        </section>

      {/* Unidades */}
        <section className="secao cinza" id="unidades">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Unidades</span>
              <h2>Duas portas abertas, de segunda a sexta</h2>
            </div>
            <div className="grade grade--2">
              <div className="unidade">
                <MapaUnidade
                  endereco="Av. Rio Branco, 221 - Centro, Itapira - SP, 13970-070"
                  descricao="Mapa da matriz da MX na Avenida Rio Branco, no Centro de Itapira"
                />
                <div className="unidade__corpo">
                  <span className="selo">Matriz</span>
                  <h3>Itapira / SP</h3>
                  <div className="dados">
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-pin" /></svg><span>Av. Rio Branco, 221 — Centro<br />Itapira/SP · CEP 13970-070</span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-relogio" /></svg><span>Segunda a sexta, 08:00 às 18:00</span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg><span><span className="dados__rot">WhatsApp · cotação, apólice, boleto e dúvidas</span><a href="https://wa.me/551938638150" className="num">(19) 3863-8150</a></span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg><span><span className="dados__rot">WhatsApp · cotação, apólice, boleto e dúvidas</span><a href="https://wa.me/551938638150" className="num">(19) 3863-8150</a></span></p>
                  </div>
                  <a className="seta" href="https://www.google.com/maps/dir/?api=1&amp;destination=Av.%20Rio%20Branco%2C%20221%20-%20Centro%2C%20Itapira%20-%20SP%2C%2013970-070" target="_blank" rel="noopener">Como chegar a Itapira <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></a>
                </div>
              </div>
              <div className="unidade">
                <MapaUnidade
                  endereco="Rua Argentina, 15 - Águas de Lindóia - SP"
                  descricao="Mapa da filial da MX na Rua Argentina, em Águas de Lindóia"
                />
                <div className="unidade__corpo">
                  <span className="selo">Filial</span>
                  <h3>Águas de Lindóia / SP</h3>
                  <div className="dados">
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-pin" /></svg><span>Rua Argentina, 15 — Salas 2 e 3 — Centro<br />Águas de Lindóia/SP · CEP <span className="token">«CEP-FILIAL»</span></span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-relogio" /></svg><span>Segunda a sexta, 08:00 às 18:00</span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg><span><span className="dados__rot">WhatsApp · cotação, apólice, boleto e dúvidas</span><a href="https://wa.me/551938638150" className="num">(19) 3863-8150</a></span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg><span><span className="dados__rot">WhatsApp · cotação, apólice, boleto e dúvidas</span><a href="https://wa.me/551938638150" className="num">(19) 3863-8150</a></span></p>
                  </div>
                  <a className="seta" href="https://www.google.com/maps/dir/?api=1&amp;destination=Rua%20Argentina%2C%2015%20-%20%C3%81guas%20de%20Lind%C3%B3ia%20-%20SP" target="_blank" rel="noopener">Como chegar a Águas de Lindóia <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
