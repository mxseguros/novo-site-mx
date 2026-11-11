import Link from 'next/link';
import type { Metadata } from 'next';
import { PILARES } from '@/content/pilares';
import { WHATSAPP } from '@/content/empresa';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false },
};

/**
 * 404 útil: com o site antigo saindo do ar, alguém vai cair fora do mapa de
 * redirecionamentos. Em vez de beco sem saída, os caminhos principais.
 */
export default function NaoEncontrada() {
  return (
    <section className="secao">
      <div className="env pilha g24">
        <div className="pilha g12">
          <span className="olho">Erro 404</span>
          <h1>Esta página não existe mais</h1>
          <p className="lide medida">
            O site da MX mudou e alguns endereços mudaram junto. O que você procurava provavelmente
            está em um destes caminhos.
          </p>
        </div>
        <div className="grade grade--4">
          {PILARES.map((p) => (
            <Link className="card" href={p.rota} key={p.id}>
              <h4>{p.rotuloMenu}</h4>
              <span className="seta">
                {p.chamada}{' '}
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-seta" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <div className="acoes">
          <Link className="btn btn--linha" href="/seguros">Ver todos os seguros</Link>
          <Link className="btn btn--socorro" href="/sinistro">Sinistro e assistência</Link>
          <a className="btn btn--zap" href={WHATSAPP.link}>
            <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
              <use href="#i-zap" />
            </svg>{' '}
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
