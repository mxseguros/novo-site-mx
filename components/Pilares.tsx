import Link from 'next/link';
import { SLUGS } from '@/content/produtos';
import { pilar } from '@/content/pilares';

/**
 * Os três pilares da home. "Para você" fica no menu, não aqui.
 *
 * Substitui a vitrine de produtos em abas: a página deixa de dizer "vendemos de
 * tudo" e passa a contar uma história só. A saúde protege quem trabalha na
 * empresa, o seguro protege o que ela tem e o consórcio financia o que ela vai
 * ter. Os cards não têm hover: caixa não reage ao mouse neste projeto.
 */

const CARDS = [
  { id: 'saude', chip: 'Pessoas', icone: 'i-vida', foto: '--f-cd-saude', titulo: 'Saúde empresarial',
    texto: 'Plano de saúde, odontológico e vida em grupo para o seu time.' },
  { id: 'financeiras', chip: 'Crescimento', icone: 'i-predio', foto: '--f-hero-condominio', titulo: 'Consórcio',
    texto: 'Imóvel, veículo e serviços, com planejamento e sem juros de financiamento.' },
  { id: 'empresarial', chip: 'Patrimônio', icone: 'i-escudo', foto: '--f-card-empresa', titulo: 'Seguro empresarial',
    texto: 'Empresa, condomínio, frota, carga, agro e responsabilidade civil.' },
] as const;

export default function Pilares() {
  return (
    <section className="secao">
      <div className="env pilha g24">
        <div className="pilha g8">
          <span className="olho">Para quem empreende na região</span>
          <h2>Pessoas, patrimônio e crescimento num só relacionamento</h2>
          <p className="lide medida">
            A saúde protege quem trabalha na empresa. O seguro protege o que a empresa tem. O
            consórcio financia o que ela vai ter. O mesmo relacionamento acompanha os três.
          </p>
        </div>

        <div className="grade grade--3">
          {CARDS.map((c) => (
            <Link
              key={c.id}
              className="foto-card foto-card--grade"
              href={pilar(c.id).rota}
              style={{ backgroundImage: `var(${c.foto})` }}
            >
              <span className="foto-card__chip">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href={`#${c.icone}`} />
                </svg>{' '}
                {c.chip}
              </span>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
              <span className="foto-card__btn">{pilar(c.id).chamada}</span>
            </Link>
          ))}
        </div>

        <Link className="seta" href="/seguros">
          Ver todos os {SLUGS.length} seguros e soluções{' '}
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <use href="#i-seta" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
