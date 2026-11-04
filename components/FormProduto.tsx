import { PRODUTOS, type Slug } from '@/content/produtos';
import { pilarDoProduto } from '@/content/pilares';
import { SLA } from '@/content/empresa';
import Dado from '@/components/Dado';
import FormPilar from '@/components/FormPilar';

/**
 * Bloco de cotação da página de produto. O texto e os campos seguem o pilar do
 * produto; os campos ficam em FormPilar.
 */
function textos(slug: Slug) {
  const p = PRODUTOS[slug];

  if (slug === 'previdencia') {
    return {
      titulo: 'Planejar a sua previdência',
      lide: `Um corretor explica PGBL e VGBL com você. Retorno em ${SLA}, em dia útil.`,
      lista: [
        'Orientação sobre PGBL, VGBL e regime tributário',
        'Sem projeção de rentabilidade: o que existe é regra, prazo e custo',
        'A escolha é sua, com o corretor ao lado',
      ],
    };
  }

  switch (pilarDoProduto(slug).id) {
    case 'financeiras':
      return {
        titulo: 'Simular este consórcio',
        lide: 'O consultor monta a simulação com as administradoras parceiras e explica o custo total antes da adesão.',
        lista: [
          'Prazo, taxa de administração e regras de lance explicados',
          'Consórcio não é seguro nem investimento',
          'Contemplação por sorteio ou lance, sem data garantida',
        ],
      };
    case 'saude':
      return {
        titulo: 'Sem número de vidas e idade, não existe cotação',
        lide: 'Preço de plano é calculado por faixa etária. Estes campos são o que transforma um pedido em uma proposta de verdade.',
        lista: [
          'Comparação entre operadoras e redes',
          'Explicação da regra de reajuste por faixa etária',
          'Apoio na contratação e na renovação',
        ],
      };
    case 'empresarial':
      return {
        titulo: 'Falar com um especialista',
        lide: 'Aqui o formulário não fecha a venda — ele evita que você repita a história. Um corretor liga com a cotação já comparada.',
        lista: [
          'Atendimento com quem cuida dessa carteira',
          'Comparação entre as seguradoras parceiras',
          'Aviso de vencimento antes da renovação',
        ],
      };
    default:
      return {
        titulo: `Cotar ${p.nome.toLowerCase()}`,
        lide: `Sem custo, sem compromisso e sem repassar seus dados. Retorno em ${SLA}, em dia útil.`,
        lista: [
          'Comparamos mais de 40 seguradoras com o mesmo risco',
          'Explicamos franquia e cobertura antes de você decidir',
          'A MX guarda a data da renovação e avisa você',
        ],
      };
  }
}

export default function FormProduto({ slug }: { slug: Slug }) {
  const conteudo = textos(slug);

  return (
    <section className="secao" id="cotar-produto">
      <div className="env">
        <div
          className="grade grade--2"
          style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}
        >
          <div className="pilha g16">
            <span className="olho">Cotação</span>
            <h2>{conteudo.titulo}</h2>
            <p className="lide">
              <Dado>{conteudo.lide}</Dado>
            </p>
            <ul className="lista-v">
              {conteudo.lista.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="form-caixa">
            <FormPilar produto={slug} />
          </div>
        </div>
      </div>
    </section>
  );
}
