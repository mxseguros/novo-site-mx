'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Os três destaques da home: vida, saúde e empresarial.
 *
 * A ordem é deliberada — vida e saúde falam com pessoa física, empresarial
 * com CNPJ. Cada slide leva a cotação e a página do produto, e o texto sai
 * da promessa que já está no produtos.ts, não de copy paralela que vai
 * divergir na primeira revisão.
 */
const SLIDES = [
  {
    slug: 'vida-individual',
    foto: 'var(--f-ph-vida-individual)',
    posicao: '62% center',
    titulo: 'Seguro de vida também paga em vida',
    texto:
      'Invalidez e doenças graves são cobertas enquanto você está aqui. E, na maioria dos planos, contratar não exige exame médico.',
    principal: 'Cotar seguro de vida',
    secundario: { rotulo: 'Falar no WhatsApp', href: 'https://wa.me/5519971386794', zap: true },
  },
  {
    slug: 'saude',
    foto: 'var(--f-ph-saude)',
    posicao: '60% center',
    titulo: 'O plano mais barato não serve se o seu hospital estiver fora da rede',
    texto:
      'A MX compara operadoras, rede credenciada e carência antes de você assinar — e continua por perto na renovação.',
    principal: 'Cotar plano de saúde',
    secundario: { rotulo: 'Ver coberturas', href: '/seguros/saude', zap: false },
  },
  {
    slug: 'empresarial',
    foto: 'var(--f-hero-empresas)',
    posicao: 'center',
    titulo: 'Seguro de empresa não é pacote de prateleira',
    texto:
      'Patrimônio, responsabilidade civil e lucros cessantes dimensionados pelo que a sua empresa realmente tem. A gente lê a apólice antes de você assinar.',
    principal: 'Cotar seguro empresarial',
    secundario: { rotulo: 'Ver coberturas', href: '/seguros/empresarial', zap: false },
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
            style={{ backgroundImage: s.foto, backgroundPosition: s.posicao }}
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
