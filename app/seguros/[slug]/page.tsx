import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUTOS, SLUGS, type Produto, type Slug } from '@/content/produtos';
import FormProduto from '@/components/FormProduto';

/**
 * As 27 páginas de produto, de uma rota só.
 *
 * Porta o motor renderProduto() do protótipo. A estrutura muda conforme o
 * template do produto:
 *   T1 massa      — perfis, como contratar, cotação direta
 *   T2 técnico    — gatilho legal, dados para cotar, contato consultivo
 *   T4 benefício  — carências, papel da corretora, cotação por vidas
 *
 * Todo o conteúdo sai do produtos.ts. Nada aqui é digitado por página.
 */

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUTOS[slug as Slug];
  if (!p) return {};
  return { title: p.nome, description: p.resumo };
}

const ICONES_PERFIL = ['i-vida', 'i-escudo', 'i-predio', 'i-relogio'];

function Icone({ id, tamanho = 20 }: { id: string; tamanho?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={tamanho} height={tamanho} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

export default async function PaginaProduto({ params }: Props) {
  const { slug } = await params;
  const p: Produto | undefined = PRODUTOS[slug as Slug];
  if (!p) notFound();

  const ctaPrimario = p.template === 2 ? 'Falar com um especialista' : 'Fazer cotação';

  return (
    <>
      {/* hero com a foto do assunto da página */}
      <section className="hero">
        <div className="hero__trilho">
          <article
            className="hero__slide"
            style={{
              backgroundImage: `var(--f-${p.foto})`,
              minHeight: 'clamp(300px,34cqi,382px)',
            }}
          >
            <div className="hero__conteudo">
              <div className="env">
                <nav
                  className="migalhas"
                  aria-label="Trilha de navegação"
                  style={{ color: 'rgba(255,255,255,.72)' }}
                >
                  <ol>
                    <li>
                      <Link href="/" style={{ color: 'rgba(255,255,255,.72)' }}>
                        Início
                      </Link>
                    </li>
                    <li>
                      <Link href="/seguros" style={{ color: 'rgba(255,255,255,.72)' }}>
                        Seguros
                      </Link>
                    </li>
                    <li aria-current="page" style={{ color: '#fff' }}>
                      {p.rotuloMenu}
                    </li>
                  </ol>
                </nav>
                <div className="hero__caixa">
                  <h1>{p.nome}</h1>
                  <p>{p.promessa}</p>
                  <div className="chip-lista">
                    {p.chips.map((c) => (
                      <span className="chip chip--neg" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="hero__acoes">
                    <a className="btn btn--branco" href="#cotar-produto">
                      {ctaPrimario}
                    </a>
                    <a className="btn btn--zap" href="https://wa.me/5519971386794">
                      <Icone id="i-zap" tamanho={17} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* abertura: gatilho legal no T2, perfis nos demais */}
      <section className="secao--curta">
        <div className="env">
          {p.template === 2 && p.gatilhoLegal ? (
            <div
              className="oferta oferta--socorro oferta--faixa"
              style={{ minHeight: 'auto' }}
            >
              <span className="olho">Quando esse seguro é exigido</span>
              <h3>{p.gatilhoLegal.titulo}</h3>
              <p>{p.gatilhoLegal.descricao}</p>
            </div>
          ) : (
            <div className="grade grade--3">
              {(p.perfis ?? []).map((b, i) => (
                <div className="card" key={b.titulo}>
                  <span className="card__icone">
                    <Icone id={ICONES_PERFIL[i % ICONES_PERFIL.length]} />
                  </span>
                  <h4>{b.titulo}</h4>
                  <p>{b.descricao}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* coberturas */}
      <section className="secao">
        <div className="env pilha g24">
          <div className="pilha g8">
            <span className="olho">{p.template === 4 ? 'Cobertura' : 'Coberturas'}</span>
            <h2>{p.template === 4 ? 'O que o plano cobre' : 'O que a apólice cobre'}</h2>
            <p className="lide medida">
              {p.template === 4
                ? 'Todo plano regulamentado tem um piso comum, definido pela ANS. O que muda entre operadoras é a rede, a acomodação, o reembolso e a abrangência.'
                : 'Nem toda seguradora chama a mesma coisa pelo mesmo nome. Na cotação a gente compara item por item.'}
            </p>
          </div>
          <div className="grade grade--3">
            {p.coberturas.map((c) => (
              <div className="oferta" style={{ minHeight: '168px' }} key={c.titulo}>
                <h3>{c.titulo}</h3>
                <p>{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* exclusões + a coluna que muda por template */}
      <section className="secao cinza">
        <div className="env">
          <div
            className="grade grade--2"
            style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}
          >
            <div className="pilha g16">
              <span className="olho">Transparência</span>
              <h2>
                {p.template === 4 ? 'O que não está coberto' : 'O que costuma ficar de fora'}
              </h2>
              <p>
                Toda apólice tem limite. É melhor você saber quais são agora do que descobrir
                no dia do sinistro.
              </p>
              <ul className="lista-x">
                {p.exclusoes.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="nota">
                A lista definitiva depende da seguradora e da apólice contratada.
              </p>
            </div>

            {p.template === 2 ? (
              <div className="pilha g16">
                <span className="olho">Para cotar</span>
                <h2>O que a MX precisa saber</h2>
                <p className="lide">
                  Com estes dados em mãos, a cotação sai comparada em até dez seguradoras —
                  sem uma rodada de e-mail para pedir informação faltando.
                </p>
                <ul className="checklist">
                  {(p.dadosParaCotar ?? []).map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ) : p.template === 4 ? (
              <div className="pilha g16">
                <span className="olho">Carência</span>
                <h2>Quanto tempo até poder usar</h2>
                {p.carencias?.length ? (
                  <>
                    <ul className="lista-v">
                      {p.carencias.map((c) => (
                        <li key={c.titulo}>
                          <b>{c.titulo}</b> — {c.descricao}
                        </li>
                      ))}
                    </ul>
                    <p className="nota">
                      Prazos máximos previstos na lei dos planos de saúde. A carência
                      praticada é a da operadora contratada.
                    </p>
                  </>
                ) : (
                  <p>
                    Previdência não tem carência de cobertura: o que existe é prazo de resgate
                    e o efeito do tempo sobre a alíquota no regime regressivo.
                  </p>
                )}
              </div>
            ) : (
              <div className="pilha g16">
                <span className="olho">Como contratar</span>
                <h2>Quatro passos, sem sair do lugar</h2>
                <div className="passos" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="passo">
                    <h4>Você conta o básico</h4>
                    <p>O que precisa ser protegido, onde fica e como é usado.</p>
                  </div>
                  <div className="passo">
                    <h4>A MX cota o mercado</h4>
                    <p>
                      Enviamos o mesmo risco para as seguradoras parceiras e comparamos as
                      propostas.
                    </p>
                  </div>
                  <div className="passo">
                    <h4>Você escolhe com o corretor</h4>
                    <p>
                      Explicamos a diferença entre franquia, cobertura e assistência antes de
                      você decidir.
                    </p>
                  </div>
                  <div className="passo">
                    <h4>Apólice emitida</h4>
                    <p>
                      Você recebe a apólice e o número da assistência. A MX guarda a data da
                      renovação.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* o papel da corretora — só nos produtos de benefício */}
      {p.template === 4 && (
        <section className="secao">
          <div className="env pilha g24">
            <div className="pilha g8">
              <span className="olho">O papel da MX</span>
              <h2>O que uma corretora faz — e o que não faz</h2>
            </div>
            <div className="grade grade--2">
              <div className="oferta" style={{ minHeight: 'auto' }}>
                <h3 style={{ maxWidth: 'none' }}>A MX faz</h3>
                <ul className="lista-v">
                  <li>Compara operadoras, rede e carência com o seu caso na mão</li>
                  <li>Explica a regra de reajuste antes de você assinar</li>
                  <li>Orienta a documentação da contratação e das inclusões</li>
                  <li>Acompanha a renovação e avalia portabilidade quando fizer sentido</li>
                </ul>
              </div>
              <div className="oferta oferta--socorro" style={{ minHeight: 'auto' }}>
                <h3 style={{ maxWidth: 'none' }}>A MX não faz</h3>
                <ul className="lista-x">
                  <li>Não administra o plano: o contrato é com a operadora</li>
                  <li>Não autoriza procedimento nem define rede credenciada</li>
                  <li>Não altera carência nem cobertura</li>
                </ul>
                <p className="nota">
                  A MX atua como corretora de seguros. A cobertura e a administração do plano
                  são da operadora contratada.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="secao">
        <div className="env pilha g20">
          <div className="pilha g8">
            <span className="olho">Perguntas frequentes</span>
            <h2>As dúvidas que mais chegam</h2>
          </div>
          <div>
            {p.faq.map((q) => (
              <details className="acord" key={q.pergunta}>
                <summary>
                  {q.pergunta}
                  <span className="mais">
                    <Icone id="i-mais" />
                  </span>
                </summary>
                <div className="acord__corpo">
                  <p>{q.resposta}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FormProduto slug={slug as Slug} />

      {/* relacionados — mesmo card de foto de "O que você quer proteger" */}
      <section className="secao cinza">
        <div className="env pilha g16">
          <div className="pilha g8">
            <span className="olho">Produtos relacionados</span>
            <h2>Quem contrata este seguro costuma olhar também</h2>
          </div>
          <div className="grade grade--4">
            {p.relacionados
              .filter((s): s is Slug => s in PRODUTOS)
              .map((s) => {
                const r = PRODUTOS[s];
                return (
                  <Link
                    className="foto-card foto-card--grade"
                    href={`/seguros/${s}`}
                    key={s}
                    style={{ backgroundImage: `var(--f-${r.foto})` }}
                  >
                    <span className="foto-card__chip">
                      <Icone id="i-etiqueta" tamanho={13} /> {r.chips[0]}
                    </span>
                    <h3>{r.rotuloMenu}</h3>
                    {/* o protótipo tinha fallback para promessa; o as const
                        prova que resumo nunca é vazio nos 27 */}
                    <p>{r.resumo}</p>
                    <span className="foto-card__btn">Ver seguro</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
