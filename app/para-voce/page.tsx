import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUTOS, porGrupo } from '@/content/produtos';
import { RETORNO } from '@/content/empresa';
import FormPilar from '@/components/FormPilar';

export const metadata: Metadata = {
  title: 'Seguros para você',
  description: 'Carro, casa, vida e viagem, com atendimento próximo em Itapira, Águas de Lindóia e região.',
};

/**
 * Seguros pessoais: porta de entrada e relacionamento, não a vitrine da marca.
 */
export default function Pagina() {
  return (
    <>
      <section className="secao--curta cinza">
        <div className="env">
          <nav className="migalhas" aria-label="Trilha de navegação">
            <ol>
              <li><Link href="/">Início</Link></li>
              <li aria-current="page">Para você</li>
            </ol>
          </nav>
          <div className="pilha g16" style={{ paddingTop: '.4rem' }}>
            <h1>Para você e para a sua família</h1>
            <p className="lide medida">
              Carro, casa, vida e viagem. Muitos clientes chegam à MX por um seguro pessoal e ficam
              pelo atendimento, na região e no dia do sinistro.
            </p>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="env pilha g24">
          <Link className="oferta oferta--faixa oferta--entrada" href="/seguros/vida-individual">
            <span className="olho">Seguro de vida</span>
            <h3>Seguro de vida também paga em vida</h3>
            <p>Invalidez e doenças graves são cobertas enquanto você está aqui. E, na maioria dos planos, contratar não exige exame médico.</p>
            <span className="seta">
              Ver coberturas{' '}
              <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg>
            </span>
          </Link>
          <div className="grade grade--3">
            {porGrupo('Para você').map((slug) => (
              <Link
                className="foto-card foto-card--grade"
                href={`/seguros/${slug}`}
                key={slug}
                style={{ backgroundImage: `var(--f-${PRODUTOS[slug].foto})` }}
              >
                <h3>{PRODUTOS[slug].rotuloMenu}</h3>
                <p>{PRODUTOS[slug].resumo}</p>
                <span className="foto-card__btn">Ver coberturas</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="secao cinza" id="cotar-voce">
        <div className="env pilha g24">
          <div className="pilha g8">
            <span className="olho">Cotação</span>
            <h2>Cotar um seguro pessoal</h2>
          </div>
          <div
            className="grade grade--2"
            style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}
          >
            <div className="pilha g16">
              <p className="lide">
                Deixe seu contato. Um consultor da MX entende o que você quer proteger, cota nas
                seguradoras que operam o produto e explica a diferença entre as propostas.
              </p>
              <ul className="lista-v">
                <li>{RETORNO}, por WhatsApp ou telefone.</li>
                <li>Quem atende é corretor, não robô de triagem.</li>
              </ul>
            </div>
            <div className="card">
              <FormPilar pilar="voce" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
