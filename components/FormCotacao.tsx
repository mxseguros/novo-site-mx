import { RETORNO } from '@/content/empresa';
import FormPilar from '@/components/FormPilar';

/**
 * Bloco de cotação da home. Substitui os quatro formulários duplicados do site
 * antigo (problema P10 do diagnóstico). Os campos ficam em FormPilar.
 */
export default function FormCotacao() {
  return (
    <section className="secao" id="cotar">
      <div className="env">
        <div
          className="grade grade--2"
          style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}
        >
          <div className="pilha g16">
            <span className="olho">Cotação</span>
            <h2>Conte o que a sua empresa precisa</h2>
            <p className="lide">
              Cada assunto pede dados diferentes. Com eles, o consultor já chega na primeira
              conversa sabendo o que comparar.
            </p>
            <ul className="lista-v">
              <li>Sem custo e sem compromisso. A corretagem já está no preço da apólice.</li>
              <li>{RETORNO}, por WhatsApp ou telefone.</li>
              <li>Quem atende é corretor, não robô de triagem.</li>
            </ul>
          </div>

          <div className="card">
            <FormPilar />
          </div>
        </div>
      </div>
    </section>
  );
}
