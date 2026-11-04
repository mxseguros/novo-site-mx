import Link from 'next/link';
import { GUIAS } from '@/content/pilares';

/** Os quatro guias de decisão de plano de saúde, em cards que levam a /guias. */
export default function GuiasCards() {
  return (
    <div className="grade grade--4 guias">
      {GUIAS.map((g) => (
        <Link className="card" href={`/guias#${g.id}`} key={g.id}>
          <span className="card__icone">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <use href="#i-lupa" />
            </svg>
          </span>
          <h4>{g.titulo}</h4>
          <p>{g.texto}</p>
          <span className="seta guias__seta">
            Ler o guia{' '}
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <use href="#i-seta" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
