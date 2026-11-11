import { PRODUTOS, type Slug } from '@/content/produtos';
import { pilarDoProduto } from '@/content/pilares';
import { RETORNO } from '@/content/empresa';
import FormPilar from '@/components/FormPilar';

/**
 * Bloco de cotação da página de produto. O texto segue o pilar do produto; o
 * formulário é o mesmo de todo o site, e o produto vai como assunto do lead.
 */
function textos(slug: Slug) {
  const p = PRODUTOS[slug];

  if (slug === 'previdencia') {
    return {
      titulo: 'Planejar a sua previdência',
      lide: `Um corretor explica PGBL e VGBL com você. ${RETORNO}.`,
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
        lide: 'Deixe seu contato e um consultor monta a simulação com você, explicando o custo total antes da adesão.',
        lista: [
          'Prazo, taxa de administração e regras de lance explicados',
          'Consórcio não é seguro nem investimento',
          'Contemplação por sorteio ou lance, sem data garantida',
        ],
      };
    case 'saude':
      return {
        titulo: 'Cotar este plano',
        lide: `Deixe seu contato e um consultor levanta com você o número de vidas, as idades e a rede que importa. ${RETORNO}.`,
        lista: [
          'Comparação entre operadoras e redes',
          'Explicação da regra de reajuste por faixa etária',
          'Apoio na contratação e na renovação',
        ],
      };
    case 'empresarial':
      return {
        titulo: 'Falar com um especialista',
        lide: `Deixe seu contato e um consultor conversa com você sobre a empresa e o que já está segurado. ${RETORNO}.`,
        lista: [
          'Atendimento com quem cuida dessa carteira',
          'Comparação entre as seguradoras parceiras',
          'Aviso de vencimento antes da renovação',
        ],
      };
    default:
      return {
        titulo: `Cotar ${p.nome.toLowerCase()}`,
        lide: `Sem custo, sem compromisso e sem repassar seus dados. ${RETORNO}.`,
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
            <p className="lide">{conteudo.lide}</p>
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
