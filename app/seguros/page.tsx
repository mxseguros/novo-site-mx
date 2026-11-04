import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUTOS, SLUGS, porGrupo } from '@/content/produtos';
import { PILARES } from '@/content/pilares';
import { WHATSAPP } from '@/content/empresa';

export const metadata: Metadata = {
  title: 'Todos os seguros',
  description: `Os ${SLUGS.length} seguros e soluções da MX, organizados pelo que protegem.`,
};

export default function Pagina() {
  return (
    <>
      <section className="secao--curta">
          <div className="env">
            <nav className="migalhas" aria-label="Trilha de navegação">
              <ol><li><Link href="/">Início</Link></li><li aria-current="page">Seguros</li></ol>
            </nav>
            <div className="pilha g16" style={{ paddingTop: '.4rem' }}>
              <span className="olho">Todos os produtos</span>
              <h1>Os {SLUGS.length} seguros e soluções da MX</h1>
              <p className="lide medida">Organizados pelo que protegem: as pessoas da empresa, o que ela vai conquistar, o patrimônio dela e a sua família. Se o que você procura não estiver aqui, fale com a gente mesmo assim — cotamos ramos que não estão nesta lista.</p>
            </div>
          </div>
        </section>

        <section className="secao--curta">
          <div className="env pilha g32">
            {PILARES.map((p) => (
              <div className="pilha g16" key={p.id}>
                <h2><Link className="titulo-link" href={p.rota}>{p.grupo}</Link></h2>
                <div className="grade grade--3">
                  {porGrupo(p.grupo).map((slug) => (
                    <Link className="card ix" href={`/seguros/${slug}`} key={slug}>
                      <h4>{PRODUTOS[slug].rotuloMenu}</h4>
                      <p>{PRODUTOS[slug].resumo}</p>
                      <span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="secao--curta cinza">
          <div className="env">
            <div className="oferta oferta--azul oferta--faixa" style={{ minHeight: 'auto' }}>
              <span className="olho" style={{ color: 'var(--sage)' }}>Não achou?</span>
              <h3 style={{ maxWidth: 'none' }}>A lista não é a fronteira do que a MX cota</h3>
              <p>Trabalhamos com mais de 40 seguradoras e acessamos ramos que não estão nesta página. Descreva o que você precisa proteger que a gente responde com o caminho.</p>
              <div className="acoes" style={{ marginTop: '.8rem' }}>
                <a className="btn btn--zap" href={WHATSAPP.link}><svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true"><use href="#i-zap" /></svg> Falar com um corretor</a>
                <Link className="btn btn--linha-neg" href="/contato">Ver todos os canais</Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
