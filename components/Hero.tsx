'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

/** Os três destaques da home. Conteúdo aprovado no protótipo. */
const SLIDES = [
  {
    foto: 'var(--f-hero-corretor)',
    titulo: 'Uma corretora com endereço, não só com aplicativo',
    texto:
      'Comparamos dez seguradoras, explicamos a diferença entre elas em português e, no dia do sinistro, é a MX que liga para a seguradora — não você.',
    principal: 'Fazer cotação',
    secundario: { rotulo: 'Falar no WhatsApp', href: 'https://wa.me/5519971386794', zap: true },
  },
  {
    foto: 'var(--f-hero-empresas)',
    titulo: 'O seguro do seu negócio conferido item por item',
    texto:
      'Patrimônio, responsabilidade civil, frota e lucros cessantes. A gente lê a apólice antes de você assinar e revisa todo ano, no vencimento.',
    principal: 'Cotar seguro empresarial',
    secundario: { rotulo: 'Ver coberturas', href: '/seguros/empresarial', zap: false },
  },
  {
    foto: 'var(--f-hero-condominio)',
    titulo: 'Seguro de condomínio sem susto na assembleia',
    texto:
      'A cobertura que a lei exige, mais responsabilidade civil do síndico e equipamentos. Cotação comparada e laudo explicado para a administradora.',
    principal: 'Cotar condomínio',
    secundario: { rotulo: 'Falar com um corretor', href: '/contato', zap: false },
  },
];

const INTERVALO = 7000;

export default function Hero() {
  const [atual, setAtual] = useState(0);
  const [parado, setParado] = useState(false);

  useEffect(() => {
    if (parado) return;
    // Quem pediu menos movimento não recebe carrossel girando sozinho.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setAtual((i) => (i + 1) % SLIDES.length), INTERVALO);
    return () => clearInterval(t);
  }, [parado]);

  const ir = (d: number) => setAtual((i) => (i + d + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="hero"
      aria-roledescription="carrossel"
      aria-label="Destaques da MX"
      onMouseEnter={() => setParado(true)}
      onMouseLeave={() => setParado(false)}
      onFocus={() => setParado(true)}
      onBlur={() => setParado(false)}
    >
      <div className="hero__trilho">
        {SLIDES.map((s, i) => (
          <article
            key={s.titulo}
            className="hero__slide"
            style={{ backgroundImage: s.foto }}
            hidden={i !== atual}
          >
            <div className="hero__conteudo">
              <div className="env">
                <div className="hero__caixa">
                  <h1>{s.titulo}</h1>
                  <p>{s.texto}</p>
                  <div className="hero__acoes">
                    <Link className="btn btn--branco" href="#cotar">
                      {s.principal}
                    </Link>
                    {s.secundario.zap ? (
                      <a className="btn btn--zap" href={s.secundario.href}>
                        <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
                          <use href="#i-zap" />
                        </svg>{' '}
                        {s.secundario.rotulo}
                      </a>
                    ) : (
                      <Link className="btn btn--linha-neg" href={s.secundario.href}>
                        {s.secundario.rotulo}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        className="hero__seta hero__seta--esq"
        aria-label="Destaque anterior"
        onClick={() => ir(-1)}
      >
        <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
          <path
            d="M12 4L6 10l6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="hero__seta hero__seta--dir"
        aria-label="Próximo destaque"
        onClick={() => ir(1)}
      >
        <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
          <path
            d="M8 4l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="hero__nav">
        {SLIDES.map((s, i) => (
          <button
            key={s.titulo}
            className="hero__ponto"
            aria-label={`Destaque ${i + 1} de ${SLIDES.length}`}
            aria-current={i === atual}
            onClick={() => setAtual(i)}
          />
        ))}
      </div>
    </section>
  );
}
