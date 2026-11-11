import Link from 'next/link';
import type { Metadata } from 'next';
import { GUIAS, pilar } from '@/content/pilares';

export const metadata: Metadata = {
  title: 'Guias para escolher o plano de saúde da empresa',
  description: 'Como comparar operadoras, carência e portabilidade, coparticipação e reajuste antes de contratar o plano de saúde da empresa.',
};

/**
 * Conteúdo para a fase de decisão: saúde empresarial leva de 3 a 5 meses, e o
 * site não pode ser só "cotar agora". Cada guia explica o tema e lista o que
 * olhar na proposta. Regra da ANS citada aqui é revista quando a norma mudar.
 */
export default function Pagina() {
  const saude = pilar('saude');

  return (
    <>
      <section className="secao--curta cinza">
        <div className="env">
          <nav className="migalhas" aria-label="Trilha de navegação">
            <ol>
              <li><Link href="/">Início</Link></li>
              <li><Link href={saude.rota}>{saude.rotuloMenu}</Link></li>
              <li aria-current="page">Guias</li>
            </ol>
          </nav>
          <div className="pilha g16" style={{ paddingTop: '.4rem' }}>
            <h1>Guias para escolher o plano de saúde da empresa</h1>
            <p className="lide medida">
              Os pontos em que as propostas mais diferem, para você comparar com calma antes de
              assinar.
            </p>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="env pilha g32">
          {GUIAS.map((g) => (
            <article className="guia pilha g12 medida" id={g.id} key={g.id}>
              <h2>{g.titulo}</h2>
              <p className="lide">{g.texto}</p>
              {g.corpo.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
              <span className="olho">O que olhar</span>
              <ul className="lista-v">
                {g.pontos.map((ponto) => (
                  <li key={ponto}>{ponto}</li>
                ))}
              </ul>
            </article>
          ))}
          <p className="nota medida">
            Rede, carências e reajuste seguem o contrato de cada operadora e as regras da ANS.
          </p>
          <div>
            <Link className="btn btn--azul" href={`${saude.rota}#cotar-saude`}>
              {saude.chamada}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
