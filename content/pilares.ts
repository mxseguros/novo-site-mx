import { PRODUTOS, type Grupo, type Slug } from '@/content/produtos';
import {
  ADMINISTRADORAS,
  CARTAS_CONTEMPLADAS,
  CASE_SAUDE,
  CASOS_SINISTRO,
  NOTA_GOOGLE,
  NUM_ADMINISTRADORAS,
  TOTAL_AVALIACOES,
  VIDAS_ADMINISTRADAS,
} from '@/content/empresa';

/**
 * Os três pilares da MX e a porta de entrada "Para você".
 *
 * O menu, o formulário e as páginas de pilar leem daqui. Cada pilar segue a
 * arquitetura de mensagem do documento de posicionamento: comprador, promessa,
 * prova e chamada. Conformidade: consórcio nunca é investimento nem promete
 * contemplação; em saúde a MX é corretora, não administradora de benefícios.
 */

export type PilarId = 'saude' | 'financeiras' | 'empresarial' | 'voce';

export interface Pilar {
  id: PilarId;
  grupo: Grupo;
  rota: string;
  rotuloMenu: string;
  /** Texto do CTA, o mesmo em toda página que leva a este pilar. */
  chamada: string;
  /** Botão de envio do formulário. */
  botao: string;
}

export const PILARES: Pilar[] = [
  { id: 'saude', grupo: 'Saúde para empresas', rota: '/saude-empresarial', rotuloMenu: 'Saúde empresarial',
    chamada: 'Cotar plano para o meu time', botao: 'Pedir cotação do plano' },
  { id: 'financeiras', grupo: 'Linhas financeiras', rota: '/consorcio', rotuloMenu: 'Consórcio',
    chamada: 'Simular meu consórcio', botao: 'Pedir minha simulação' },
  { id: 'empresarial', grupo: 'Seguro empresarial', rota: '/seguro-empresarial', rotuloMenu: 'Seguro empresarial',
    chamada: 'Revisar meu seguro', botao: 'Pedir revisão do seguro' },
  { id: 'voce', grupo: 'Para você', rota: '/para-voce', rotuloMenu: 'Para você',
    chamada: 'Cotar agora', botao: 'Quero minha cotação' },
];

export const pilar = (id: PilarId) => PILARES.find((p) => p.id === id)!;
export const pilarDoProduto = (slug: Slug) => PILARES.find((p) => p.grupo === PRODUTOS[slug].grupo)!;

export interface ConteudoPilar {
  meta: { titulo: string; descricao: string };
  ancora: string;
  hero: { foto: string; posicao: string; faixa?: boolean; titulo: string; texto: string; chips: string[] };
  conformidade?: { olho: string; titulo: string; itens: string[] };
  paraQuem: {
    titulo: string;
    lide?: string;
    colunas: 3 | 4;
    perfis: { icone: string; titulo: string; descricao: string }[];
  };
  passos: { titulo: string; itens: { titulo: string; descricao: string }[] };
  provas: { valor: string; titulo: string; descricao: string }[];
  guias?: boolean;
  atendimento: string;
  especialista: 'saude' | 'financeiras' | 'empresarial';
  produtos: { titulo: string; estilo: 'foto' | 'indice'; colunas: 3 | 4; nota?: string };
}

export const CONTEUDO: Record<'saude' | 'financeiras' | 'empresarial', ConteudoPilar> = {
  saude: {
    meta: {
      titulo: 'Plano de saúde para empresas',
      descricao: 'Comparamos operadoras, rede e reajuste antes de você assinar, e reavaliamos todo ano. Itapira, Águas de Lindóia e região.',
    },
    ancora: 'cotar-saude',
    hero: {
      foto: 'var(--f-hero-saude)',
      posicao: '58% center',
      faixa: true,
      titulo: 'Plano de saúde para o seu time, escolhido com quem conhece a sua empresa',
      texto: 'Comparamos operadoras, rede e reajuste antes de você assinar, e reavaliamos o contrato todo ano.',
      chips: ['Operadoras lado a lado', 'Recotação antes da renovação', 'Portabilidade de carências, quando cabe'],
    },
    paraQuem: {
      titulo: 'Todo seguro espera o pior. A saúde trabalha todo mês.',
      lide: 'O único benefício que a empresa contrata torcendo para ser usado. Para o dono ou o RH de pequena e média empresa.',
      colunas: 3,
      perfis: [
        { icone: 'i-vida', titulo: 'A empresa ainda não tem plano',
          descricao: 'Quer oferecer o benefício e precisa saber quanto custa por vida, com que rede e com que coparticipação.' },
        { icone: 'i-predio', titulo: 'Quer trocar de operadora',
          descricao: 'A rede não atende onde o time mora, ou o atendimento piorou. A troca pede comparar carência e portabilidade.' },
        { icone: 'i-escudo', titulo: 'O reajuste chegou alto',
          descricao: 'A renovação está perto e o índice proposto pesa no caixa. Dá para recotar o mercado antes de aceitar.' },
      ],
    },
    passos: {
      titulo: 'Da primeira conversa à renovação',
      itens: [
        { titulo: 'Levantamento', descricao: 'Quantas vidas, idades, cidades e a rede que o time já usa.' },
        { titulo: 'Comparação', descricao: 'Operadoras, rede credenciada, acomodação, coparticipação e carências, lado a lado.' },
        { titulo: 'Contratação', descricao: 'A MX organiza a documentação. O contrato é entre a empresa e a operadora.' },
        { titulo: 'Revisão anual', descricao: 'Antes do aniversário do contrato, a MX recota o mercado e leva as opções a você.' },
      ],
    },
    provas: [
      { valor: VIDAS_ADMINISTRADAS, titulo: 'vidas em planos intermediados pela MX', descricao: 'Número da carteira atual' },
      { valor: NOTA_GOOGLE, titulo: 'de nota no Google', descricao: `${TOTAL_AVALIACOES} avaliações de clientes` },
      { valor: CASE_SAUDE, titulo: 'case real, com autorização do cliente', descricao: 'Empresa, problema e resultado' },
    ],
    guias: true,
    atendimento: 'Fale direto com quem cuida de saúde na MX',
    especialista: 'saude',
    produtos: {
      titulo: 'Benefícios para o seu time',
      estilo: 'foto',
      colunas: 3,
      nota: 'A MX é corretora de seguros, não administradora de benefícios: inclusão e exclusão de vidas são feitas pela empresa junto à operadora. Rede, carências e reajuste seguem o contrato e as regras da ANS.',
    },
  },

  financeiras: {
    meta: {
      titulo: 'Consórcio',
      descricao: 'Consórcio de imóvel, veículo e serviços sem juros de financiamento, com taxa de administração explicada antes da adesão.',
    },
    ancora: 'cotar-consorcio',
    hero: {
      foto: 'var(--f-hero-condominio)',
      posicao: 'center',
      titulo: 'Consórcio para crescer sem juros de financiamento',
      texto: 'Imóvel, veículo ou serviço com planejamento. A MX ajuda a escolher o grupo, explica a taxa de administração e acompanha você até a contemplação.',
      chips: ['Imóvel', 'Automóvel', 'Serviços'],
    },
    conformidade: {
      olho: 'Antes de tudo',
      titulo: 'Consórcio não é seguro, e a MX explica a diferença',
      itens: [
        'É regulado pelo Banco Central (Lei 11.795/2008), não pela SUSEP.',
        'Não é investimento e não rende: é uma compra programada.',
        'A contemplação é por sorteio ou lance, sem data garantida.',
        'Não tem juros de financiamento, mas tem taxa de administração e fundo de reserva, informados antes da adesão.',
        `O contrato, a carta de crédito e as assembleias são da administradora. A MX atua junto a ${ADMINISTRADORAS}.`,
      ],
    },
    paraQuem: {
      titulo: 'Para o empresário e para a família',
      colunas: 3,
      perfis: [
        { icone: 'i-predio', titulo: 'Imóvel da empresa ou da família',
          descricao: 'Sala comercial, galpão, casa ou terreno, com a carta de crédito usada na compra.' },
        { icone: 'i-caminhao', titulo: 'Veículos',
          descricao: 'O carro da família ou os veículos da empresa, planejados sem comprometer o caixa com juros.' },
        { icone: 'i-etiqueta', titulo: 'Serviços',
          descricao: 'Reforma, formatura, viagem e outros serviços previstos no objeto do grupo.' },
      ],
    },
    passos: {
      titulo: 'Do objetivo à carta de crédito',
      itens: [
        { titulo: 'Objetivo', descricao: 'O que você quer comprar, o valor da carta e a parcela que cabe no mês.' },
        { titulo: 'Simulação', descricao: 'O consultor compara grupos das administradoras parceiras: prazo, taxa e regras de lance.' },
        { titulo: 'Adesão', descricao: 'Você entra no grupo com contrato da administradora, sabendo o custo total.' },
        { titulo: 'Acompanhamento', descricao: 'A MX acompanha as assembleias com você até a contemplação e o uso da carta.' },
      ],
    },
    provas: [
      { valor: CARTAS_CONTEMPLADAS, titulo: 'cartas contempladas de clientes MX', descricao: 'Número real da carteira' },
      { valor: NUM_ADMINISTRADORAS, titulo: 'administradoras parceiras', descricao: 'Autorizadas pelo Banco Central' },
      { valor: '24', titulo: 'anos de mercado', descricao: 'Atuando desde 2002' },
    ],
    atendimento: 'Fale com quem cuida de consórcio na MX',
    especialista: 'financeiras',
    produtos: {
      titulo: 'Linhas financeiras',
      estilo: 'foto',
      colunas: 4,
      nota: 'Consórcio é intermediado junto a administradoras autorizadas pelo Banco Central e não é seguro nem investimento. Previdência é produto de seguro de pessoas, regulado pela SUSEP, e não tem rentabilidade garantida.',
    },
  },

  empresarial: {
    meta: {
      titulo: 'Seguro empresarial',
      descricao: 'Seguro dimensionado pelo que a empresa realmente tem: patrimônio, responsabilidade civil, frota, carga e lucros cessantes.',
    },
    ancora: 'cotar-empresarial',
    hero: {
      foto: 'var(--f-hero-empresas)',
      posicao: 'center',
      titulo: 'Seguro de empresa dimensionado pelo que ela realmente tem',
      texto: 'Patrimônio, responsabilidade civil, frota, carga e lucros cessantes. A MX levanta os riscos com você e lê a apólice item por item antes de você assinar.',
      chips: ['Comércio e serviços', 'Indústria', 'Agro', 'Hotelaria'],
    },
    paraQuem: {
      titulo: 'Seguro de empresa não é pacote de prateleira',
      lide: 'Cada operação tem riscos próprios, e o dono de empresa da região sabe disso melhor do que ninguém.',
      colunas: 4,
      perfis: [
        { icone: 'i-etiqueta', titulo: 'Comércio e serviços',
          descricao: 'Loja, escritório e clínica: incêndio, roubo, equipamentos e responsabilidade civil.' },
        { icone: 'i-predio', titulo: 'Indústria e obra',
          descricao: 'Máquinas, estoque, riscos de engenharia e garantia de contrato.' },
        { icone: 'i-planta', titulo: 'Agro',
          descricao: 'Lavoura, penhor rural e máquinas agrícolas, no campo e no transporte.' },
        { icone: 'i-casa', titulo: 'Hotelaria e turismo',
          descricao: 'Hotel, pousada e eventos: patrimônio, responsabilidade civil com hóspedes e lucros cessantes.' },
      ],
    },
    passos: {
      titulo: 'Da apólice atual à proposta certa',
      itens: [
        { titulo: 'Levantamento', descricao: 'O que a empresa tem, o que ela faz e o que já está segurado hoje.' },
        { titulo: 'Cotação', descricao: 'O risco vai para as seguradoras que operam o ramo, e não para todas.' },
        { titulo: 'Leitura da apólice', descricao: 'Coberturas, limites e franquias comparados item por item antes de assinar.' },
        { titulo: 'Sinistro', descricao: 'A MX acompanha o processo com a seguradora, do aviso ao encerramento.' },
      ],
    },
    provas: [
      { valor: CASOS_SINISTRO, titulo: 'casos de sinistro acompanhados', descricao: 'Com autorização do cliente' },
      { valor: '+40', titulo: 'seguradoras parceiras', descricao: 'Nem toda opera todos os ramos' },
    ],
    atendimento: 'Fale com quem cuida de seguro empresarial na MX',
    especialista: 'empresarial',
    produtos: { titulo: 'Os ramos que a MX cota para empresas', estilo: 'indice', colunas: 3 },
  },
};

/** Conteúdo para quem está no meio de uma decisão de meses. */
export const GUIAS = [
  {
    id: 'operadoras',
    titulo: 'Como comparar operadoras',
    texto: 'Rede, abrangência e acomodação dizem mais do que o preço.',
    pontos: [
      'A rede credenciada nas cidades onde o time mora',
      'A abrangência: municipal, regional ou nacional',
      'A acomodação: enfermaria ou apartamento',
      'O reembolso e a livre escolha, quando existem',
    ],
  },
  {
    id: 'carencia',
    titulo: 'Carência e portabilidade',
    texto: 'Quem já tem plano pode levar o tempo cumprido, se os requisitos baterem.',
    pontos: [
      'Os prazos de carência da proposta, dentro dos limites da ANS',
      'Se a portabilidade se aplica a quem já tem plano',
      'Como a proposta trata doença ou lesão preexistente',
    ],
  },
  {
    id: 'coparticipacao',
    titulo: 'Coparticipação vale a pena?',
    texto: 'Ela baixa a mensalidade, mas muda quanto cada pessoa paga ao usar.',
    pontos: [
      'Como a coparticipação é cobrada de cada pessoa',
      'Os tetos por procedimento e por mês',
      'O quanto o time usa o plano, antes de escolher',
    ],
  },
  {
    id: 'reajuste',
    titulo: 'Como funciona o reajuste',
    texto: 'No plano empresarial, o índice é negociado entre empresa e operadora.',
    pontos: [
      'O reajuste anual e a sinistralidade do contrato',
      'O reajuste por faixa etária',
      'A recotação do mercado antes da renovação',
    ],
  },
];
