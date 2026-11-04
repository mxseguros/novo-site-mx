import Link from 'next/link';
import Hero from '@/components/Hero';
import Pilares from '@/components/Pilares';
import Especialistas from '@/components/Especialistas';
import FormCotacao from '@/components/FormCotacao';
import GuiasCards from '@/components/GuiasCards';
import Unidades from '@/components/Unidades';
import Dado from '@/components/Dado';
import { pilar } from '@/content/pilares';
import { NOTA_GOOGLE, TOTAL_AVALIACOES, WHATSAPP, WHATSAPP_SINISTRO } from '@/content/empresa';

/**
 * Home — aprovada no protótipo v3 (Docs/prototipo-v3-pilares.html).
 *
 * Abre com uma promessa só e apresenta a MX pelos três pilares: saúde,
 * consórcio e seguro empresarial. Os links de produto saem do produtos.ts e os
 * de pilar do pilares.ts — nenhum destino é digitado à mão.
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
                <span className="numeros__d">A seguradora certa para cada risco</span>
              </div>
              <div className="numeros__item">
                <span className="numeros__n num">2</span>
                <span className="numeros__t">escritórios de porta aberta</span>
                <span className="numeros__d">Consultores que moram em Itapira e em Águas de Lindóia</span>
              </div>
            </div>
          </div>
        </section>

      {/* Entradas fixas dos outros dois pilares */}
        <section className="entradas">
          <div className="env">
            <div className="grade grade--2">
              <Link className="oferta oferta--entrada" href={pilar('financeiras').rota}>
                <span className="olho">Consórcio</span>
                <h3>Imóvel, veículo ou serviço sem juros de financiamento</h3>
                <p>Compra planejada com acompanhamento até a contemplação. Consórcio não é seguro nem investimento, e a MX explica isso antes de você aderir.</p>
                <span className="seta">{pilar('financeiras').chamada} <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span>
              </Link>
              <Link className="oferta oferta--entrada" href={pilar('empresarial').rota}>
                <span className="olho">Seguro empresarial</span>
                <h3>Seguro dimensionado pelo que a sua empresa realmente tem</h3>
                <p>Patrimônio, responsabilidade civil, frota e carga. A gente lê a apólice atual com você e mostra o que sobra e o que falta.</p>
                <span className="seta">{pilar('empresarial').chamada} <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span>
              </Link>
            </div>
          </div>
        </section>

      <Pilares />

      {/* Especialistas por pilar */}
        <section className="secao cinza">
          <div className="env pilha g24">
            <div className="pilha g8">
              <span className="olho">Quem cuida de cada área</span>
              <h2>Você sabe o nome de quem atende a sua empresa</h2>
              <p className="lide medida">Cada pilar tem um consultor responsável, que mora na região e acompanha a sua conta da cotação à renovação.</p>
            </div>
            <Especialistas />
          </div>
        </section>

      <FormCotacao />

      {/* Conteúdo para quem está decidindo: saúde empresarial leva meses */}
        <section className="secao cinza">
          <div className="env pilha g24">
            <div className="pilha g8">
              <span className="olho">Antes de decidir</span>
              <h2>Antes de trocar o plano de saúde da empresa</h2>
              <p className="lide medida">Escolher um plano leva meses. Estes guias explicam os pontos em que as propostas mais diferem.</p>
            </div>
            <GuiasCards />
          </div>
        </section>

      {/* Sinistro */}
        <section className="secao escuro">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}>
              <div className="pilha g16">
                <span className="olho" style={{ color: 'var(--sage)' }}>Já é cliente e precisa agora</span>
                <h2>Sinistro e assistência</h2>
                <p className="lide">O telefone da assistência da sua seguradora fica aberto na tela, sem clique e sem acordeão. A página abre em conexão ruim e pode ser salva no celular.</p>
                <div className="acoes">
                  <Link className="btn btn--socorro" href="/sinistro">Abrir sinistro e assistência</Link>
                  <a className="btn btn--zap num" href={WHATSAPP_SINISTRO.link}><svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true"><use href="#i-zap" /></svg> {WHATSAPP_SINISTRO.numero}</a>
                </div>
              </div>
              <div className="horarios">
                <div className="horario">
                  <span className="horario__quando">24 horas, todos os dias</span>
                  <h4>Assistência da sua seguradora</h4>
                  <p>Guincho, chaveiro, socorro mecânico e aviso de sinistro. Os telefones de cada seguradora estão na página de sinistro.</p>
                </div>
                <div className="horario">
                  <span className="horario__quando">Segunda a sexta, 08:00 às 18:00</span>
                  <h4>WhatsApp de sinistro da MX</h4>
                  <p>Documentação e acompanhamento do processo com a seguradora. Fora desse horário, comece pela assistência 24 horas e mande a mensagem: a MX responde no próximo dia útil.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Os dois canais */}
        <section className="secao--curta">
          <div className="env">
            <div className="oferta oferta--larga oferta--faixa" style={{ minHeight: 'auto' }}>
              <span className="olho">Canais</span>
              <h3>São dois números, e cada um tem um dono</h3>
              <p>Um resolve tudo: cotação, apólice, boleto e dúvida. O outro é só para sinistro, e por isso não fica preso em conversa de venda.</p>
              <div className="acoes" style={{ paddingTop: '.7rem' }}>
                <a className="btn btn--zap btn--peq num" href={WHATSAPP.link}><svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><use href="#i-zap" /></svg> {WHATSAPP.numero}</a>
                <a className="btn btn--socorro btn--peq num" href={WHATSAPP_SINISTRO.link}>{WHATSAPP_SINISTRO.numero} · sinistro</a>
              </div>
            </div>
          </div>
        </section>

      {/* Seguradoras */}
        <section className="secao">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Seguradoras parceiras</span>
              <h2>A seguradora certa para o risco da sua empresa</h2>
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
              <div className="logos__item"><img src="/seguradoras/seg_itau.webp" alt="Itaú Seguros" /></div>
              <div className="logos__item"><img src="/seguradoras/seg_mapfre.webp" alt="MAPFRE Seguros" /></div>
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
              <div className="prova">
                <span className="prova__n num"><Dado>{NOTA_GOOGLE}</Dado></span>
                <h2 className="prova__t">de 5 no Google, em <Dado>{TOTAL_AVALIACOES}</Dado> avaliações</h2>
              </div>
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
                <p>A MX atende Itapira, Águas de Lindóia e as cidades em volta desde 2002. Quem cota o seu seguro é a mesma pessoa que você encontra no escritório da Avenida Rio Branco ou da Rua Argentina. É ela que acompanha a renovação e o sinistro.</p>
                <ul className="lista-v">
                  <li>Somos corretora: não assumimos o risco nem administramos planos. Nosso trabalho é escolher a seguradora certa, ler a apólice com você e ficar do seu lado quando algo acontece.</li>
                  <li>Cada área tem um consultor responsável: saúde, consórcio e seguro empresarial.</li>
                  <li>No sinistro, a MX acompanha o processo com a seguradora do primeiro contato até o encerramento.</li>
                </ul>
                <Link className="seta" href="/a-mx">Conhecer a MX <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></Link>
              </div>
              <div className="foto-larga" style={{ backgroundImage: 'var(--f-predio-mx)' }} role="img" aria-label="Prédio da MX"></div>
            </div>
          </div>
        </section>

      {/* Unidades */}
        <section className="secao cinza" id="unidades">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Unidades</span>
              <h2>Duas portas abertas, de segunda a sexta</h2>
            </div>
            <Unidades />
          </div>
        </section>
    </>
  );
}
