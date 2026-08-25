import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trabalhe conosco',
  description:
    'Como enviar seu currículo para a MX Corretora de Seguros, em Itapira e Águas de Lindóia.',
};

/**
 * Página nova — não existia no protótipo, onde "Trabalhe conosco" era uma
 * âncora sem destino.
 *
 * Escrita sem inventar o que não dá para confirmar: não há lista de vagas,
 * não há promessa de benefício e não há descrição do time. O que está aqui
 * é o que o site já afirma em outras páginas (duas unidades, desde 2002,
 * os cinco valores) mais o que é fato do ofício de corretor.
 *
 * Os «tokens» marcam o que depende de resposta da MX.
 */
export default function TrabalheConosco() {
  return (
    <>
      <section className="hero">
        <div className="hero__trilho">
          <article
            className="hero__slide"
            style={{
              backgroundImage: 'var(--f-foto-equipe)',
              minHeight: 'clamp(280px,30cqi,340px)',
            }}
          >
            <div className="hero__conteudo">
              <div className="env">
                <nav
                  className="migalhas"
                  aria-label="Trilha de navegação"
                  style={{ color: 'rgba(255,255,255,.72)' }}
                >
                  <ol>
                    <li>
                      <Link href="/" style={{ color: 'rgba(255,255,255,.72)' }}>
                        Início
                      </Link>
                    </li>
                    <li aria-current="page" style={{ color: '#fff' }}>
                      Trabalhe conosco
                    </li>
                  </ol>
                </nav>
                <div className="hero__caixa">
                  <h1>Trabalhe conosco</h1>
                  <p>
                    A MX é uma corretora de duas portas abertas, em Itapira e Águas de
                    Lindóia. Quem trabalha aqui atende cliente que passa na rua e volta no
                    ano seguinte.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* O ponto mais honesto da página vem primeiro: não há mural de vagas. */}
      <section className="secao--curta">
        <div className="env">
          <div className="oferta oferta--faixa" style={{ minHeight: 'auto' }}>
            <span className="olho">Antes de tudo</span>
            <h3>Não mantemos um mural de vagas</h3>
            <p>
              A MX é uma corretora regional e contrata pouco, quando a operação pede.
              Currículo enviado fora de processo é guardado e consultado quando abre uma
              posição — não some, mas também não recebe resposta automática.{' '}
              <span className="token">«VAGAS»</span>
            </p>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="env pilha g24">
          <div className="pilha g8">
            <span className="olho">Como é o trabalho</span>
            <h2>Seguro aqui não é venda por telefone</h2>
            <p className="lide medida">
              A corretora vive de renovação, não de primeira venda. Isso muda o dia a dia:
              a mesma pessoa que faz a cotação atende o sinistro dois anos depois, e o
              cliente lembra o nome de quem atendeu.
            </p>
          </div>

          <div className="grade grade--3">
            <div className="card">
              <span className="card__icone">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-pin" />
                </svg>
              </span>
              <h4>Presencial, em duas cidades</h4>
              <p>
                Av. Rio Branco, 221, em Itapira, e Rua Argentina, 15, em Águas de Lindóia.
                De segunda a sexta, das 08:00 às 18:00.
              </p>
            </div>
            <div className="card">
              <span className="card__icone">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-escudo" />
                </svg>
              </span>
              <h4>Dez seguradoras para comparar</h4>
              <p>
                Cada cotação sai comparada entre as parceiras. Quem trabalha aqui aprende a
                ler apólice e a explicar a diferença entre elas em português.
              </p>
            </div>
            <div className="card">
              <span className="card__icone">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-relogio" />
                </svg>
              </span>
              <h4>O sinistro é a hora da verdade</h4>
              <p>
                Quando dá problema, é a corretora que liga para a seguradora. É o momento em
                que o cliente decide se fica ou não — e o que mais ensina o ofício.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="secao cinza">
        <div className="env">
          <div
            className="grade grade--2"
            style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}
          >
            <div className="pilha g16">
              <span className="olho">O que a MX procura</span>
              <h2>Os cinco valores não são cartaz de parede</h2>
              <p>
                São os mesmos que estão na página <Link href="/a-mx">A MX</Link>, e valem
                para contratação: ética, pontualidade, transparência, integridade e
                comprometimento.
              </p>
              <div className="chip-lista">
                <span className="chip">Ética</span>
                <span className="chip">Pontualidade</span>
                <span className="chip">Transparência</span>
                <span className="chip">Integridade</span>
                <span className="chip">Comprometimento</span>
              </div>
              <p className="nota">
                Numa corretora, transparência é requisito técnico: quem omite uma exclusão
                na hora da venda cria um problema que só aparece no dia do sinistro.
              </p>
            </div>

            <div className="pilha g16">
              <span className="olho">Para atuar como corretor</span>
              <h2>A habilitação vem antes</h2>
              <p>
                Vender seguro no Brasil exige registro de corretor na SUSEP, com exame e
                habilitação próprios. Sem ele, dá para trabalhar em atendimento, no
                administrativo e no apoio a sinistro — mas não para intermediar apólice.
              </p>
              <ul className="lista-v">
                <li>Já tem registro SUSEP? Diga o número no e-mail.</li>
                <li>Está em processo de habilitação? Também vale contar.</li>
                <li>Não tem e quer começar? Conte de que lado você quer entrar.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="secao" id="candidatar">
        <div className="env">
          <div
            className="grade grade--2"
            style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}
          >
            <div className="pilha g16">
              <span className="olho">Como se candidatar</span>
              <h2>Um e-mail resolve</h2>
              <p className="lide">
                Não há formulário nem cadastro. Manda o currículo por e-mail que ele entra
                no nosso arquivo.
              </p>
              <ul className="checklist">
                <li>Currículo em PDF</li>
                <li>Em qual das duas unidades você teria condição de trabalhar</li>
                <li>Se tem registro SUSEP, ou se está em processo</li>
                <li>Experiência com seguros, se houver — e não é eliminatório se não houver</li>
              </ul>
              <div className="acoes" style={{ paddingTop: '.4rem' }}>
                <a
                  className="btn btn--azul"
                  href="mailto:mxseguros@mxseguros.com.br?subject=Trabalhe%20conosco%20%E2%80%94%20curr%C3%ADculo"
                >
                  mxseguros@mxseguros.com.br
                </a>
              </div>
              <p className="nota">
                Assunto sugerido: <b>Trabalhe conosco — currículo</b>. Ajuda a não se perder
                no meio das apólices. <span className="token">«EMAIL-RH»</span>
              </p>
            </div>

            <div className="oferta oferta--faixa" style={{ minHeight: 'auto' }}>
              <span className="olho">Seus dados</span>
              <h3>O que fazemos com o seu currículo</h3>
              <p>
                O currículo é usado só para avaliar candidatura e fica guardado enquanto
                houver interesse mútuo. Não é compartilhado com seguradoras nem usado para
                oferta de seguro. Para pedir a exclusão, basta responder ao e-mail.
              </p>
              <div className="acoes" style={{ marginTop: 'auto', paddingTop: '.9rem' }}>
                <Link className="seta" href="/politica-de-privacidade">
                  Política de Privacidade{' '}
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <use href="#i-seta" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secao--curta cinza">
        <div className="env">
          <div className="grade grade--2">
            <Link className="card" href="/a-mx">
              <span className="card__icone">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-vida" />
                </svg>
              </span>
              <h4>Conhecer a MX</h4>
              <p>Quem somos, desde quando, e como a corretora trabalha.</p>
              <span className="seta">
                Ler{' '}
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-seta" />
                </svg>
              </span>
            </Link>
            <Link className="card" href="/contato">
              <span className="card__icone">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-pin" />
                </svg>
              </span>
              <h4>Endereços e unidades</h4>
              <p>Onde ficam os dois escritórios, com mapa e horário.</p>
              <span className="seta">
                Ver{' '}
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-seta" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
