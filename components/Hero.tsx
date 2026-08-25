'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
    secundario: { rotulo: 'Falar no WhatsApp', href: 'https://wa.me/551938638150', zap: true },
  },
  {
    slug: 'saude',
    // corredor de hospital, CC0 do Wikimedia. A ph-saude ficou só no header
    // do produto: repetir a mesma foto no hero e na página cansa.
    foto: 'var(--f-hero-saude)',
    posicao: '58% center',
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

/** Quanto do gesto precisa andar para valer troca de slide. */
const LIMIAR = 0.14;

export default function Hero() {
  const [atual, setAtual] = useState(0);
  const [parado, setParado] = useState(false);
  /** Deslocamento do dedo em fração da largura, enquanto o gesto acontece. */
  const [arrasto, setArrasto] = useState(0);
  const trilho = useRef<HTMLDivElement>(null);
  const gesto = useRef<{ x: number; y: number; eixo: 'indef' | 'x' | 'y'; id: number } | null>(null);

  useEffect(() => {
    if (parado) return;
    // Quem pediu menos movimento não recebe carrossel girando sozinho.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setAtual((i) => (i + 1) % SLIDES.length), INTERVALO);
    return () => clearInterval(t);
  }, [parado]);

  const ir = (d: number) => setAtual((i) => (i + d + SLIDES.length) % SLIDES.length);

  /* Arrastar com o dedo.
     Dois cuidados que fazem a diferença entre carrossel e armadilha:
     o eixo do gesto é decidido no primeiro movimento — se a pessoa está
     rolando a página para baixo, soltamos o gesto e não sequestramos a
     rolagem; e nas pontas o arrasto tem resistência, para o limite ficar
     perceptível em vez de dar a impressão de travamento. */
  function comecou(e: React.PointerEvent) {
    if (e.pointerType === 'mouse') return; // no desktop as setas resolvem
    gesto.current = { x: e.clientX, y: e.clientY, eixo: 'indef', id: e.pointerId };
    setParado(true);
  }

  function moveu(e: React.PointerEvent) {
    const g = gesto.current;
    if (!g || e.pointerId !== g.id) return;
    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;

    if (g.eixo === 'indef') {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      g.eixo = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (g.eixo === 'y') {
        gesto.current = null;
        setParado(false);
        return;
      }
      e.currentTarget.setPointerCapture(g.id);
    }

    const largura = trilho.current?.offsetWidth || 1;
    let f = dx / largura;
    const naPonta = (f > 0 && atual === 0) || (f < 0 && atual === SLIDES.length - 1);
    if (naPonta) f *= 0.32;
    setArrasto(f);
  }

  function soltou(e: React.PointerEvent) {
    const g = gesto.current;
    if (!g) return;
    if (g.eixo === 'x') {
      if (arrasto <= -LIMIAR) ir(1);
      else if (arrasto >= LIMIAR) ir(-1);
      try { e.currentTarget.releasePointerCapture(g.id); } catch {}
    }
    gesto.current = null;
    setArrasto(0);
    setParado(false);
  }

  const arrastando = gesto.current?.eixo === 'x';
  const deslocamento = (-atual + arrasto) * 100;

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
      <div
        className="hero__trilho"
        ref={trilho}
        onPointerDown={comecou}
        onPointerMove={moveu}
        onPointerUp={soltou}
        onPointerCancel={soltou}
        style={{
          transform: `translate3d(${deslocamento}%, 0, 0)`,
          transition: arrastando ? 'none' : 'transform .38s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {SLIDES.map((s, i) => (
          <article
            key={s.titulo}
            className="hero__slide"
            style={{ backgroundImage: s.foto, backgroundPosition: s.posicao }}
            /* Os três ficam no DOM para o trilho poder deslizar. inert tira
               os inativos do foco e do leitor de tela — sem ele, o Tab cai
               em botão que está fora da tela. */
            inert={i !== atual}
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
