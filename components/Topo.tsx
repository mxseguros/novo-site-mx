'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { PRODUTOS, porGrupo, type Grupo } from '@/content/produtos';

/* O painel tem três colunas, não um grupo por coluna: Consórcios fica
   embaixo de Saúde e previdência, na mesma coluna. */
const COLUNAS: Grupo[][] = [
  ['Para você'],
  ['Para sua empresa'],
  ['Saúde e previdência', 'Consórcios'],
];

export default function Topo() {
  const rota = usePathname();
  const [aberto, setAberto] = useState(false);
  /** Altura máxima do painel, medida pelo espaço livre abaixo dele. */
  const [alturaMax, setAlturaMax] = useState<string | undefined>();
  const painel = useRef<HTMLDivElement>(null);
  const fechar = useRef<number | null>(null);

  /* O painel mostra tudo quando cabe, e só rola quando não cabe.
     O header é sticky, então o topo do painel é estável na viewport:
     basta medir o que sobra abaixo dele. Precisa ser layout effect —
     antes de o painel abrir ele é display:none e mede zero. */
  useLayoutEffect(() => {
    if (!aberto) return;
    const medir = () => {
      const topo = painel.current?.getBoundingClientRect().top ?? 0;
      setAlturaMax(`${Math.max(240, window.innerHeight - topo - 8)}px`);
    };
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [aberto]);

  // Esc fecha o painel de qualquer lugar da página.
  useEffect(() => {
    if (!aberto) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [aberto]);

  /* Recolhe sozinho ao tirar o mouse, com folga — e só em ponteiro fino.
     No toque não fecha sozinho: o dedo sai da área o tempo todo. */
  const fino = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function saiu() {
    if (!fino()) return;
    fechar.current = window.setTimeout(() => setAberto(false), 350);
  }
  function voltou() {
    if (fechar.current) window.clearTimeout(fechar.current);
  }

  /* O logo é sempre "voltar ao começo". Em outra página o Link já leva para
     a home no topo; na própria home a navegação seria um no-op, então aqui
     ele vira âncora e sobe a página. */
  function clicouNoLogo(e: React.MouseEvent) {
    setAberto(false);
    if (rota !== '/') return;
    e.preventDefault();
    const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' });
  }

  return (
    <>
      <div className="util">
        <div className="env">
          <Link href="/a-mx">A MX</Link>
          <Link href="/contato">Unidades</Link>
          <Link href="/trabalhe-conosco">Trabalhe conosco</Link>
          <Link className="util__socorro" href="/sinistro">
            <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
              <use href="#i-alerta" />
            </svg>
            Sinistro e assistência 24h
          </Link>
        </div>
      </div>

      <header className="topo" onMouseLeave={saiu} onMouseEnter={voltou}>
        <div className="env">
          <div className="topo__linha">
            <Link
              href="/"
              className="logo"
              aria-label="MX Corretora de Seguros — página inicial"
              onClick={clicouNoLogo}
            />
            <nav className="topo__nav" aria-label="Principal">
              <button
                className="topo__link"
                aria-expanded={aberto}
                aria-controls="painel-seguros"
                onClick={() => setAberto((v) => !v)}
              >
                Seguros{' '}
                <svg viewBox="0 0 12 8" aria-hidden="true">
                  <use href="#i-baixo" />
                </svg>
              </button>
              <Link className="topo__link" href="/sinistro">
                Sinistro e Assistência
              </Link>
              <Link className="topo__link" href="/a-mx">
                A MX
              </Link>
              <Link className="topo__link" href="/contato">
                Contato
              </Link>
            </nav>
            <div className="topo__dir">
              <a
                className="btn btn--zap btn--peq topo__cta topo__zap"
                href="https://wa.me/551938638150"
                aria-label="Falar no WhatsApp da MX"
              >
                <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
                  <use href="#i-zap" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <Link className="btn btn--azul btn--peq topo__cta" href="/#cotar">
                Fazer cotação
              </Link>
              <button
                className="topo__hamb"
                aria-expanded={aberto}
                aria-controls="painel-seguros"
                aria-label="Abrir menu"
                onClick={() => setAberto((v) => !v)}
              >
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path
                    d="M3 6h14M3 10h14M3 14h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="painel"
          id="painel-seguros"
          data-aberto={aberto ? '1' : '0'}
          ref={painel}
          style={{ maxHeight: alturaMax }}
        >
          <div className="env">
            <button
              className="painel__fechar"
              type="button"
              aria-label="Fechar menu de seguros"
              onClick={() => setAberto(false)}
            >
              <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                <path
                  d="M5 5l10 10M15 5L5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="painel__grade">
              {COLUNAS.map((coluna) => {
                const comItens = coluna.filter((g) => porGrupo(g).length);
                if (!comItens.length) return null;
                return (
                  <div className="painel__col" key={coluna.join('+')}>
                    {comItens.map((grupo) => (
                      <div className="painel__bloco" key={grupo}>
                        <h4>{grupo}</h4>
                        <ul>
                          {porGrupo(grupo).map((slug) => (
                              <li key={slug}>
                                <Link
                                  href={`/seguros/${slug}`}
                                  onClick={() => setAberto(false)}
                                >
                                  {PRODUTOS[slug].rotuloMenu}
                                </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {coluna.includes('Consórcios') && (
                      <div className="painel__ajuda">
                        <h4>Não achou o que procura?</h4>
                        <p>
                          Trabalhamos com mais de 40 seguradoras e cotamos ramos que não estão
                          nesta lista.
                        </p>
                        <a
                          className="btn btn--zap btn--peq btn--largo"
                          href="https://wa.me/551938638150"
                        >
                          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                            <use href="#i-zap" />
                          </svg>{' '}
                          Contar o que preciso
                        </a>
                        <span className="painel__ajuda__rot">
                          WhatsApp da MX · seg a sex, 08:00 às 18:00
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
