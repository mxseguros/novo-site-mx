'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { PRODUTOS, porGrupo } from '@/content/produtos';
import { PILARES } from '@/content/pilares';
import { WHATSAPP } from '@/content/empresa';

/* O menu principal são os pilares, não a lista de produtos: 32 itens com o
   mesmo peso comunicavam "vendemos de tudo". No desktop cada pilar é um link, e
   a lista completa fica em /seguros. O painel só existe no menu do celular. */

export default function Topo() {
  const rota = usePathname();
  const [aberto, setAberto] = useState(false);
  /** Altura máxima do painel, medida pelo espaço livre abaixo dele. */
  const [alturaMax, setAlturaMax] = useState<string | undefined>();
  const painel = useRef<HTMLDivElement>(null);

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
          <Link href="/seguros">Todos os seguros</Link>
          <Link href="/trabalhe-conosco">Trabalhe conosco</Link>
          <Link className="util__socorro" href="/sinistro">
            <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
              <use href="#i-alerta" />
            </svg>
            Sinistro e assistência 24h
          </Link>
        </div>
      </div>

      <header className="topo">
        <div className="env">
          <div className="topo__linha">
            <Link href="/" className="logo" onClick={clicouNoLogo}>
              <span className="oculto">MX Corretora de Seguros — página inicial</span>
            </Link>
            <nav className="topo__nav" aria-label="Principal">
              {PILARES.map((p) => (
                <Link
                  className="topo__link"
                  href={p.rota}
                  key={p.id}
                  aria-current={rota === p.rota ? 'page' : undefined}
                >
                  {p.rotuloMenu}
                </Link>
              ))}
            </nav>
            <div className="topo__dir">
              <a
                className="btn btn--zap btn--peq topo__cta topo__zap"
                href={WHATSAPP.link}
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
              aria-label="Fechar menu"
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

            <div className="painel__grade painel__grade--4">
              {PILARES.map((p) => (
                <div className="painel__col" key={p.id}>
                  <h4>
                    <Link href={p.rota} onClick={() => setAberto(false)}>
                      {p.grupo}
                    </Link>
                  </h4>
                  <ul>
                    {porGrupo(p.grupo).map((slug) => (
                      <li key={slug}>
                        <Link href={`/seguros/${slug}`} onClick={() => setAberto(false)}>
                          {PRODUTOS[slug].rotuloMenu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="painel__extra">
              <Link href="/a-mx" onClick={() => setAberto(false)}>A MX</Link>
              <Link href="/contato" onClick={() => setAberto(false)}>Unidades</Link>
              <Link href="/seguros" onClick={() => setAberto(false)}>Todos os seguros</Link>
              <Link href="/trabalhe-conosco" onClick={() => setAberto(false)}>Trabalhe conosco</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
