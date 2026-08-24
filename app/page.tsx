import { PRODUTOS, GRUPOS, porGrupo } from "@/content/produtos";

/**
 * Home provisória.
 *
 * A home de verdade é a do protótipo aprovado no Portão G2 e entra na próxima
 * etapa. Esta página existe para o primeiro deploy provar o encanamento:
 * design system carregando, DM Sans aplicada, container queries respondendo e
 * o conteúdo dos 27 seguros legível a partir de content/produtos.ts.
 */
export default function Home() {
  return (
    <main>
      <section className="secao">
        <div className="env pilha g24">
          <div className="pilha g8">
            <span className="olho">Site em construção</span>
            <h1>MX Corretora de Seguros</h1>
            <p className="lide medida">
              O novo site está sendo implementado a partir do protótipo aprovado. Enquanto
              isso, o atendimento continua em{" "}
              <a href="https://mxseguros.com.br">mxseguros.com.br</a> e pelo WhatsApp.
            </p>
          </div>

          <div className="acoes">
            <a className="btn btn--zap" href="https://wa.me/5519971386794">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="secao cinza">
        <div className="env pilha g20">
          <div className="pilha g8">
            <span className="olho">Conteúdo já migrado</span>
            <h2>{Object.keys(PRODUTOS).length} seguros prontos para as páginas</h2>
          </div>

          <div className="grade grade--3">
            {GRUPOS.map((grupo) => (
              <div className="card" key={grupo}>
                <h4>{grupo}</h4>
                <ul className="lista-v">
                  {porGrupo(grupo).map((slug) => (
                    <li key={slug}>{PRODUTOS[slug].rotuloMenu}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
