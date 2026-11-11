import { RETORNO } from '@/content/empresa';
import FormPilar from '@/components/FormPilar';

/**
 * Bloco de cotação da home. Substitui os quatro formulários duplicados do site
 * antigo (problema P10 do diagnóstico). O formulário fica em FormPilar.
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
            <h2>Peça sua cotação</h2>
            <p className="lide">
              Deixe seu nome e WhatsApp. Um consultor da MX entra em contato para entender o que
              você precisa e montar a cotação.
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
