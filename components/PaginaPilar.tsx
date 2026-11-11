import Link from 'next/link';
import { PRODUTOS, porGrupo } from '@/content/produtos';
import { CONTEUDO, pilar } from '@/content/pilares';
import { WHATSAPP, pendente } from '@/content/empresa';
import { Especialista } from '@/components/Especialistas';
import FormPilar from '@/components/FormPilar';
import GuiasCards from '@/components/GuiasCards';

/**
 * Template das três páginas de pilar: comprador, promessa, prova e chamada,
 * como na arquitetura de mensagem do documento de posicionamento. O conteúdo
 * vem de content/pilares.ts; nada aqui é digitado por pilar.
 */
export default function PaginaPilar({ id }: { id: keyof typeof CONTEUDO }) {
  const c = CONTEUDO[id];
  const p = pilar(id);
  const provas = c.provas.filter((prova) => !pendente(prova.valor) && !pendente(prova.descricao)).slice(0, 3);

  return (
    <>
      <section className="hero">
        <article
          className={'hero__slide' + (c.hero.faixa ? ' hero__slide--faixa' : '')}
          style={c.hero.faixa ? undefined : { backgroundImage: c.hero.foto, backgroundPosition: c.hero.posicao }}
        >
          {c.hero.faixa && (
            <>
              <div
                className="hero__arte"
                style={{ backgroundImage: c.hero.foto, backgroundPosition: c.hero.posicao }}
                aria-hidden="true"
              />
              <div className="hero__moldura" aria-hidden="true" />
            </>
          )}
          <div className="hero__conteudo">
            <div className="env">
              <nav className="migalhas migalhas--neg" aria-label="Trilha de navegação">
                <ol>
                  <li>
                    <Link href="/">Início</Link>
                  </li>
                  <li aria-current="page">{p.rotuloMenu}</li>
                </ol>
              </nav>
              <div className="hero__caixa">
                <h1>{c.hero.titulo}</h1>
                <p>{c.hero.texto}</p>
                <div className="chip-lista">
                  {c.hero.chips.map((chip) => (
                    <span className="chip chip--neg" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="hero__acoes">
                  <a className="btn btn--branco" href={`#${c.ancora}`}>
                    {p.chamada}
                  </a>
                  <a className="btn btn--zap" href={WHATSAPP.link}>
                    <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
                      <use href="#i-zap" />
                    </svg>{' '}
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="numeros">
        <div className="env">
          <div className="numeros__grade">
            {provas.map((prova) => (
              <div className="numeros__item" key={prova.titulo}>
                <span className="numeros__n num">{prova.valor}</span>
                <span className="numeros__t">{prova.titulo}</span>
                <span className="numeros__d">{prova.descricao}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {c.conformidade && (
        <section className="secao--curta">
          <div className="env">
            <div className="oferta oferta--faixa conf">
              <span className="olho">{c.conformidade.olho}</span>
              <h3>{c.conformidade.titulo}</h3>
              <ul className="lista-v">
                {c.conformidade.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="secao">
        <div className="env pilha g24">
          <div className="pilha g8">
            <span className="olho">Para quem é</span>
            <h2>{c.paraQuem.titulo}</h2>
            {c.paraQuem.lide && <p className="lide medida">{c.paraQuem.lide}</p>}
          </div>
          <div className={`grade grade--${c.paraQuem.colunas}`}>
            {c.paraQuem.perfis.map((perfil) => (
              <div className="card" key={perfil.titulo}>
                <span className="card__icone">
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <use href={`#${perfil.icone}`} />
                  </svg>
                </span>
                <h4>{perfil.titulo}</h4>
                <p>{perfil.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao cinza">
        <div className="env pilha g24">
          <div className="pilha g8">
            <span className="olho">Como a MX trabalha</span>
            <h2>{c.passos.titulo}</h2>
          </div>
          <div className="passos">
            {c.passos.itens.map((passo) => (
              <div className="passo" key={passo.titulo}>
                <h4>{passo.titulo}</h4>
                <p>{passo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {c.guias && (
        <section className="secao">
          <div className="env pilha g24">
            <div className="pilha g8">
              <span className="olho">Antes de decidir</span>
              <h2>O que comparar entre as propostas</h2>
            </div>
            <GuiasCards />
          </div>
        </section>
      )}

      <section className="secao cinza" id={c.ancora}>
        <div className="env pilha g24">
          <div className="pilha g8">
            <span className="olho">Quem atende</span>
            <h2>{c.atendimento}</h2>
          </div>
          <div
            className="grade grade--2"
            style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}
          >
            <div className="pilha g16">
              <Especialista id={c.especialista} />
            </div>
            <div className="card">
              <FormPilar pilar={id} />
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="env pilha g20">
          <div className="pilha g8">
            <span className="olho">Neste pilar</span>
            <h2>{c.produtos.titulo}</h2>
          </div>
          <div className={`grade grade--${c.produtos.colunas}`}>
            {porGrupo(p.grupo).map((slug) =>
              c.produtos.estilo === 'foto' ? (
                <Link
                  className="foto-card foto-card--grade"
                  href={`/seguros/${slug}`}
                  key={slug}
                  style={{ backgroundImage: `var(--f-${PRODUTOS[slug].foto})` }}
                >
                  <h3>{PRODUTOS[slug].rotuloMenu}</h3>
                  <p>{PRODUTOS[slug].resumo}</p>
                  {/* consórcio não é seguro: não tem cobertura */}
                  <span className="foto-card__btn">{id === 'financeiras' ? 'Ver detalhes' : 'Ver coberturas'}</span>
                </Link>
              ) : (
                <Link className="card ix" href={`/seguros/${slug}`} key={slug}>
                  <h4>{PRODUTOS[slug].rotuloMenu}</h4>
                  <p>{PRODUTOS[slug].resumo}</p>
                  <span className="seta guias__seta">
                    Ver coberturas{' '}
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <use href="#i-seta" />
                    </svg>
                  </span>
                </Link>
              ),
            )}
          </div>
          {c.produtos.nota && <p className="nota">{c.produtos.nota}</p>}
        </div>
      </section>
    </>
  );
}
