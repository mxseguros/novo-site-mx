/**
 * Conteúdo dos 27 seguros que a MX cota.
 *
 * Portado do objeto PRODUTOS do protótipo v2 (Fase 2, Portão G2), com os
 * nomes de campo abertos. É a fonte única: o mega-menu, o índice, o carrossel
 * da home, o rodapé e a rota /seguros/[slug] leem daqui. Nenhum destino de
 * produto é digitado à mão — foi assim que o site atual acumulou link quebrado.
 */

/** T1 massa · T2 técnico e B2B · T4 benefício. Não existe T3: as páginas de
 *  consórcio saíram do site em 21/08/2026 (a MX não representa administradora). */
export type Template = 1 | 2 | 4;

export type Grupo = 'Para você' | 'Para sua empresa' | 'Saúde e previdência';

export interface Item { titulo: string; descricao: string }
export interface Pergunta { pergunta: string; resposta: string }

export interface Produto {
  nome: string;
  /** Rótulo curto, usado no menu e nos cards. */
  rotuloMenu: string;
  grupo: Grupo;
  template: Template;
  /** Nome do arquivo em /public/fotos, sem extensão. */
  foto: string;
  /** Caminho público. Todos preservados do site antigo — não alterar sem 301. */
  url: string;
  resumo: string;
  promessa: string;
  chips: string[];
  /** 'Para quem é' — só em T1 e T4. */
  perfis?: Item[];
  /** 'Quando esse seguro é exigido' — substitui os perfis em parte dos T2. */
  gatilhoLegal?: Item;
  coberturas: Item[];
  /** Só em T4 (saúde e odontológico). Previdência não tem carência. */
  carencias?: Item[];
  exclusoes: string[];
  /** Só em T2 — alimenta o bloco 'O que a MX precisa saber'. */
  dadosParaCotar?: string[];
  faq: Pergunta[];
  /** Slugs de outros produtos. */
  relacionados: string[];
}

export const PRODUTOS = {
  "automovel": {
    "nome": "Seguro de Automóvel",
    "rotuloMenu": "Automóvel",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-automovel",
    "url": "/automovel/",
    "resumo": "Colisão, roubo, danos a terceiros e assistência 24 horas.",
    "promessa": "Cobre o seu carro contra colisão, incêndio e roubo, paga o prejuízo que você causar a terceiros e coloca um guincho na sua porta quando o carro para.",
    "chips": [
      "Assistência 24h",
      "Carro reserva",
      "Vidros",
      "Cotação em mais de 40 seguradoras"
    ],
    "perfis": [
      {
        "titulo": "Quem depende do carro para trabalhar",
        "descricao": "A prioridade é carro reserva e guincho rápido, não o preço da parcela."
      },
      {
        "titulo": "Primeiro carro na família",
        "descricao": "A prioridade é o valor da franquia e a cobertura a terceiros."
      },
      {
        "titulo": "Carro financiado",
        "descricao": "O banco costuma exigir apólice vigente durante todo o contrato."
      }
    ],
    "coberturas": [
      {
        "titulo": "Colisão, incêndio e roubo",
        "descricao": "Conserto do veículo ou indenização integral em caso de perda total."
      },
      {
        "titulo": "Danos a terceiros",
        "descricao": "Danos materiais e corporais que você causar a outra pessoa, dentro do limite contratado."
      },
      {
        "titulo": "Assistência 24 horas",
        "descricao": "Guincho, chaveiro, pane seca, troca de pneu e táxi, conforme o plano."
      },
      {
        "titulo": "Carro reserva",
        "descricao": "Veículo à disposição durante o conserto, pelo número de diárias contratado."
      },
      {
        "titulo": "Vidros, faróis e retrovisores",
        "descricao": "Contratação separada na maioria das seguradoras. Vale a conta em cidade com muita obra."
      },
      {
        "titulo": "Acidentes pessoais de passageiros",
        "descricao": "Indenização por morte ou invalidez de quem estava no carro."
      }
    ],
    "exclusoes": [
      "Condutor sem CNH válida no momento do acidente",
      "Direção sob efeito de álcool ou substância que reduza o reflexo",
      "Uso em competição, racha ou fora de estrada",
      "Desgaste natural, defeito mecânico e falta de manutenção",
      "Uso comercial não declarado — aplicativo, entrega, transporte remunerado",
      "Acessórios e blindagem não declarados na proposta"
    ],
    "faq": [
      {
        "pergunta": "O seguro cobre se outra pessoa estiver dirigindo?",
        "resposta": "Em regra sim, desde que a pessoa tenha CNH válida e o perfil declarado na proposta esteja correto. Se o carro é dirigido com frequência por alguém mais jovem, isso precisa constar — é o que evita discussão no sinistro."
      },
      {
        "pergunta": "Franquia é o mesmo que participação obrigatória?",
        "resposta": "É o valor que fica por sua conta no conserto. Franquia menor significa prêmio maior. Na cotação a gente mostra as duas contas para você escolher com número na mão."
      },
      {
        "pergunta": "Uso o carro para aplicativo. Muda alguma coisa?",
        "resposta": "Muda, e precisa ser declarado. Existem seguradoras que aceitam e outras que não. Contratar sem declarar é o caminho mais rápido para ter o sinistro negado."
      }
    ],
    "relacionados": [
      "moto",
      "caminhao",
      "frota",
      "acidentes-pessoais"
    ]
  },
  "moto": {
    "nome": "Seguro de Moto",
    "rotuloMenu": "Moto",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-moto",
    "url": "/moto/",
    "resumo": "Cobertura para a moto e para quem depende dela no trabalho.",
    "promessa": "Roubo, furto, colisão e danos a terceiros — com assistência que chega onde a moto parou, e não só onde é fácil chegar.",
    "chips": [
      "Assistência 24h",
      "Danos a terceiros",
      "Roubo e furto"
    ],
    "perfis": [
      {
        "titulo": "Quem usa a moto para trabalhar",
        "descricao": "Entrega e deslocamento diário mudam o perfil de risco e precisam ser declarados."
      },
      {
        "titulo": "Moto de fim de semana",
        "descricao": "Uso esporádico costuma render prêmio menor — se estiver declarado corretamente."
      },
      {
        "titulo": "Moto financiada",
        "descricao": "O contrato de financiamento em geral exige cobertura vigente."
      }
    ],
    "coberturas": [
      {
        "titulo": "Roubo e furto",
        "descricao": "Indenização pelo valor de mercado referenciado na apólice."
      },
      {
        "titulo": "Colisão e incêndio",
        "descricao": "Conserto ou indenização integral em caso de perda total."
      },
      {
        "titulo": "Danos a terceiros",
        "descricao": "O item mais importante em moto: o prejuízo causado a outra pessoa costuma superar o valor da própria moto."
      },
      {
        "titulo": "Assistência 24 horas",
        "descricao": "Reboque, chaveiro e pane seca, com quilometragem definida no plano."
      },
      {
        "titulo": "Acidentes pessoais do condutor",
        "descricao": "Indenização por morte ou invalidez do piloto e do garupa."
      },
      {
        "titulo": "Capacete e acessórios",
        "descricao": "Cobertura opcional para equipamento de segurança, quando declarado."
      }
    ],
    "exclusoes": [
      "Condutor sem habilitação na categoria A",
      "Uso em competição, trilha ou prática esportiva",
      "Transporte remunerado não declarado",
      "Acessórios e escapamento não originais sem declaração",
      "Desgaste de pneu, corrente e componentes de manutenção"
    ],
    "faq": [
      {
        "pergunta": "Vale a pena segurar uma moto de baixo valor?",
        "resposta": "Quase sempre a conta se paga pela cobertura de danos a terceiros, não pela moto. Um acidente com um carro ou com um pedestre gera prejuízo muito maior que o valor da moto."
      },
      {
        "pergunta": "Trabalho com entrega. Consigo seguro?",
        "resposta": "Sim, mas o uso precisa ser declarado. Nem toda seguradora aceita, e por isso a comparação entre as parceiras faz diferença aqui."
      },
      {
        "pergunta": "O garupa está coberto?",
        "resposta": "Na cobertura de acidentes pessoais de passageiro, sim, dentro do limite contratado. É um item que costuma vir desligado por padrão."
      }
    ],
    "relacionados": [
      "automovel",
      "acidentes-pessoais",
      "bike",
      "caminhao"
    ]
  },
  "caminhao": {
    "nome": "Seguro de Caminhão",
    "rotuloMenu": "Caminhão",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-caminhao",
    "url": "/caminhao/",
    "resumo": "Para o caminhoneiro autônomo, com assistência na estrada.",
    "promessa": "Para o caminhoneiro autônomo: cobertura do veículo, danos a terceiros e assistência que entende de estrada, não de rua de bairro.",
    "chips": [
      "Assistência na estrada",
      "Danos a terceiros",
      "Implementos"
    ],
    "perfis": [
      {
        "titulo": "Autônomo com um caminhão",
        "descricao": "O veículo é a ferramenta de trabalho — parada longa custa mais que o conserto."
      },
      {
        "titulo": "Caminhão financiado",
        "descricao": "O banco costuma exigir apólice vigente durante todo o contrato."
      },
      {
        "titulo": "Quem roda com carga de terceiro",
        "descricao": "O seguro do veículo não cobre a carga. Aí entram os seguros de transporte."
      }
    ],
    "coberturas": [
      {
        "titulo": "Colisão, incêndio e roubo",
        "descricao": "Cavalo mecânico, carroceria e implementos, quando declarados."
      },
      {
        "titulo": "Danos a terceiros",
        "descricao": "Limites mais altos que em automóvel, porque o potencial de dano é maior."
      },
      {
        "titulo": "Assistência 24 horas pesada",
        "descricao": "Reboque com guincho compatível, socorro mecânico e hospedagem do motorista."
      },
      {
        "titulo": "Implementos e equipamentos",
        "descricao": "Baú, sider, tanque, prancha e equipamentos agregados, item a item."
      },
      {
        "titulo": "Acidentes pessoais do condutor",
        "descricao": "Morte e invalidez do motorista."
      },
      {
        "titulo": "Vidros e faróis",
        "descricao": "Item de alta frequência em quem roda muito."
      }
    ],
    "exclusoes": [
      "Carga transportada — cobertura é dos seguros de transporte",
      "Excesso de peso comprovado no sinistro",
      "Condutor sem CNH na categoria exigida",
      "Desgaste, falha mecânica e manutenção em atraso",
      "Implemento não declarado na proposta"
    ],
    "faq": [
      {
        "pergunta": "O seguro do caminhão cobre a carga?",
        "resposta": "Não. A carga é objeto de outro seguro. Se você transporta carga de terceiro com CNPJ, o pacote correto é RCTR-C, RC-DC e RC-V — veja a página de Transportes."
      },
      {
        "pergunta": "Sou autônomo, sem CNPJ. Muda alguma coisa?",
        "resposta": "Não impede a contratação do seguro do veículo. Muda quando entra carga de terceiro, aí a exigência é diferente."
      },
      {
        "pergunta": "Roda em rodovia federal com frequência. Isso encarece?",
        "resposta": "O perfil de rota entra no cálculo, junto com o local de pernoite. Declarar certo é o que evita problema no sinistro."
      }
    ],
    "relacionados": [
      "transportes",
      "frota",
      "automovel",
      "acidentes-pessoais"
    ]
  },
  "residencial": {
    "nome": "Seguro Residencial",
    "rotuloMenu": "Residencial",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-residencial",
    "url": "/residencial/",
    "resumo": "Incêndio, roubo, danos elétricos e vendaval, com chaveiro e encanador.",
    "promessa": "Incêndio, roubo, danos elétricos e vendaval — mais o chaveiro que aparece às 23h quando a chave quebra na fechadura.",
    "chips": [
      "Assistência 24h",
      "Danos elétricos",
      "Roubo de bens"
    ],
    "perfis": [
      {
        "titulo": "Casa própria",
        "descricao": "O foco é a estrutura e o conteúdo, com valor de reconstrução declarado corretamente."
      },
      {
        "titulo": "Imóvel alugado",
        "descricao": "O inquilino segura o conteúdo; a estrutura costuma ser responsabilidade do proprietário."
      },
      {
        "titulo": "Imóvel financiado",
        "descricao": "O financiamento em geral já embute uma cobertura mínima, quase sempre insuficiente."
      }
    ],
    "coberturas": [
      {
        "titulo": "Incêndio, raio e explosão",
        "descricao": "A cobertura básica, sobre a estrutura e o conteúdo declarado."
      },
      {
        "titulo": "Roubo e furto qualificado",
        "descricao": "Bens subtraídos com arrombamento ou ameaça, dentro do limite contratado."
      },
      {
        "titulo": "Danos elétricos",
        "descricao": "Geladeira, ar-condicionado, televisão e portão queimados por oscilação."
      },
      {
        "titulo": "Vendaval, granizo e impacto de veículos",
        "descricao": "Telhado, muro e esquadrias."
      },
      {
        "titulo": "Responsabilidade civil familiar",
        "descricao": "Dano involuntário causado a vizinho ou a terceiro por você ou pela sua família."
      },
      {
        "titulo": "Assistência residencial 24h",
        "descricao": "Chaveiro, encanador, eletricista e vidraceiro, com número de acionamentos por ano."
      }
    ],
    "exclusoes": [
      "Furto simples, sem sinal de arrombamento",
      "Infiltração antiga e problema estrutural preexistente",
      "Joias e dinheiro acima do limite, sem declaração específica",
      "Imóvel desocupado por período superior ao previsto na apólice",
      "Bens de terceiros guardados no imóvel, sem declaração"
    ],
    "faq": [
      {
        "pergunta": "Preciso listar tudo o que tenho em casa?",
        "resposta": "Não item a item. Você declara um valor total de conteúdo, e itens de alto valor — joia, obra de arte, equipamento profissional — entram em cobertura específica."
      },
      {
        "pergunta": "Alugo por temporada. Isso muda a apólice?",
        "resposta": "Muda, e precisa ser declarado. Uso comercial ou locação por temporada altera o risco e pode exigir produto diferente."
      },
      {
        "pergunta": "A assistência é ilimitada?",
        "resposta": "Não. Cada plano define quantos acionamentos por ano e qual o teto por serviço. É um dos itens que a MX compara entre as seguradoras."
      }
    ],
    "relacionados": [
      "condominio",
      "fianca-locaticia",
      "vida-individual",
      "equipamentos-portateis"
    ]
  },
  "vida-individual": {
    "nome": "Seguro de Vida Individual",
    "rotuloMenu": "Vida Individual",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-vida-individual",
    "url": "/vida-individual/",
    "resumo": "Proteção financeira para quem depende de você.",
    "promessa": "Proteção financeira para quem depende de você — e, em vida, cobertura para invalidez e doenças graves.",
    "chips": [
      "Sem exame na maioria dos planos",
      "Invalidez",
      "Doenças graves"
    ],
    "perfis": [
      {
        "titulo": "Quem tem filho pequeno",
        "descricao": "O objetivo é sustentar a renda da família pelos anos em que ela ainda depende de você."
      },
      {
        "titulo": "Quem tem dívida longa",
        "descricao": "Financiamento imobiliário e empréstimo não desaparecem — o seguro evita que virem herança."
      },
      {
        "titulo": "Autônomo e profissional liberal",
        "descricao": "Sem afastamento remunerado, a cobertura de invalidez costuma pesar mais que a de morte."
      }
    ],
    "coberturas": [
      {
        "titulo": "Morte por qualquer causa",
        "descricao": "Capital pago aos beneficiários indicados na apólice."
      },
      {
        "titulo": "Morte acidental",
        "descricao": "Capital adicional quando a causa é acidente."
      },
      {
        "titulo": "Invalidez permanente por acidente",
        "descricao": "Indenização proporcional ao grau de invalidez."
      },
      {
        "titulo": "Doenças graves",
        "descricao": "Antecipação de capital no diagnóstico de doenças listadas em contrato."
      },
      {
        "titulo": "Diária por internação",
        "descricao": "Valor por dia de internação hospitalar, com carência e limite."
      },
      {
        "titulo": "Assistência funeral",
        "descricao": "Cobertura de despesas, com opção de estender a familiares."
      }
    ],
    "exclusoes": [
      "Doença preexistente não declarada na contratação",
      "Suicídio nos dois primeiros anos de vigência, conforme a lei",
      "Prática de esporte de alto risco não declarada",
      "Morte decorrente de ato ilícito do próprio segurado",
      "Coberturas ainda em período de carência"
    ],
    "faq": [
      {
        "pergunta": "Preciso fazer exame médico?",
        "resposta": "Na maioria dos planos individuais, não. Preenche-se uma declaração de saúde. Declarar corretamente é o que garante o pagamento depois — omissão é o motivo mais comum de recusa."
      },
      {
        "pergunta": "Quem recebe a indenização?",
        "resposta": "Os beneficiários que você indicar, na proporção que definir. Não precisa ser parente, e a indicação pode ser alterada a qualquer momento."
      },
      {
        "pergunta": "Serve para quitar meu financiamento?",
        "resposta": "Serve, se o capital for dimensionado para isso. É uma das contas que fazemos na hora de definir o valor da cobertura."
      }
    ],
    "relacionados": [
      "acidentes-pessoais",
      "vida-em-grupo",
      "previdencia",
      "saude"
    ]
  },
  "acidentes-pessoais": {
    "nome": "Seguro de Acidentes Pessoais",
    "rotuloMenu": "Acidentes Pessoais",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-acidentes-pessoais",
    "url": "/acidentes-pessoais/",
    "resumo": "Indenização por morte ou invalidez decorrente de acidente.",
    "promessa": "Indenização por morte ou invalidez decorrente de acidente, 24 horas por dia — inclusive fora do trabalho.",
    "chips": [
      "Contratação rápida",
      "Cobertura 24h",
      "Exigido em contrato"
    ],
    "perfis": [
      {
        "titulo": "Quem pratica esporte",
        "descricao": "Corrida, ciclismo, futebol amador e academia entram na cobertura, com declaração da modalidade."
      },
      {
        "titulo": "Exigência de contrato",
        "descricao": "Muitos contratos de prestação de serviço e de trabalho pedem a apólice como condição."
      },
      {
        "titulo": "Complemento do seguro de vida",
        "descricao": "Custa pouco e cobre exatamente o que mais acontece: acidente com sequela."
      }
    ],
    "coberturas": [
      {
        "titulo": "Morte acidental",
        "descricao": "Capital pago aos beneficiários."
      },
      {
        "titulo": "Invalidez permanente total ou parcial",
        "descricao": "Indenização proporcional, conforme tabela da apólice."
      },
      {
        "titulo": "Despesas médicas e hospitalares",
        "descricao": "Reembolso de gastos decorrentes do acidente, até o limite contratado."
      },
      {
        "titulo": "Diária por incapacidade temporária",
        "descricao": "Valor por dia de afastamento, com franquia em dias."
      },
      {
        "titulo": "Assistência funeral",
        "descricao": "Cobertura das despesas, com rede prestadora."
      }
    ],
    "exclusoes": [
      "Doença, mesmo que incapacitante — a cobertura é só para acidente",
      "Esporte de alto risco não declarado",
      "Acidente sob efeito de álcool ou de substância psicoativa",
      "Ato ilícito praticado pelo próprio segurado",
      "Procedimento estético e suas complicações"
    ],
    "faq": [
      {
        "pergunta": "Qual a diferença para o seguro de vida?",
        "resposta": "Acidentes pessoais cobre apenas evento acidental. O seguro de vida cobre morte por qualquer causa, inclusive doença. Os dois se complementam e o custo é bem diferente."
      },
      {
        "pergunta": "Cobre acidente de trabalho?",
        "resposta": "Cobre, e também fora do expediente. É uma apólice de 24 horas, diferente do seguro obrigatório que a empresa contrata."
      },
      {
        "pergunta": "Posso contratar para toda a família?",
        "resposta": "Pode, em apólice individual para cada pessoa ou em plano familiar, dependendo da seguradora."
      }
    ],
    "relacionados": [
      "vida-individual",
      "bike",
      "viagem",
      "estagiario"
    ]
  },
  "viagem": {
    "nome": "Seguro Viagem",
    "rotuloMenu": "Viagem",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-viagem",
    "url": "/viagem/",
    "resumo": "Assistência médica, bagagem e cancelamento, dentro e fora do país.",
    "promessa": "Assistência médica, bagagem extraviada e cancelamento — dentro e fora do país, com atendimento em português.",
    "chips": [
      "Exigido em alguns destinos",
      "Assistência médica",
      "Bagagem"
    ],
    "perfis": [
      {
        "titulo": "Viagem internacional",
        "descricao": "Alguns destinos exigem cobertura médica mínima como condição de entrada."
      },
      {
        "titulo": "Viagem nacional",
        "descricao": "Atendimento fora da rede do seu plano de saúde e assistência em estrada."
      },
      {
        "titulo": "Viagem a trabalho",
        "descricao": "Cobertura para equipamento de trabalho e para cancelamento por motivo profissional."
      }
    ],
    "coberturas": [
      {
        "titulo": "Despesas médicas e hospitalares",
        "descricao": "Atendimento no destino, com limite em euros ou dólares."
      },
      {
        "titulo": "Bagagem extraviada ou danificada",
        "descricao": "Indenização complementar à da companhia aérea."
      },
      {
        "titulo": "Cancelamento e interrupção de viagem",
        "descricao": "Reembolso por motivos previstos em contrato."
      },
      {
        "titulo": "Regresso sanitário e traslado",
        "descricao": "Transporte de volta em caso de necessidade médica."
      },
      {
        "titulo": "Assistência odontológica emergencial",
        "descricao": "Atendimento de urgência durante a viagem."
      },
      {
        "titulo": "Assistência jurídica e financeira",
        "descricao": "Apoio em caso de perda de documento ou de imprevisto no destino."
      }
    ],
    "exclusoes": [
      "Condição médica preexistente, salvo cobertura específica contratada",
      "Esporte radical não declarado",
      "Viagem iniciada antes da emissão da apólice",
      "Gravidez a partir da semana definida em contrato",
      "Eventos decorrentes de consumo de álcool ou droga"
    ],
    "faq": [
      {
        "pergunta": "Qual destino exige seguro?",
        "resposta": "Vários países exigem cobertura médica mínima para entrada, e o valor varia por bloco de países. Confirmamos a exigência do seu destino antes de emitir. «DESTINOS»"
      },
      {
        "pergunta": "Posso contratar em cima da hora?",
        "resposta": "Pode, desde que antes do embarque. Apólice emitida depois de a viagem começar não tem validade."
      },
      {
        "pergunta": "Meu cartão de crédito já não cobre?",
        "resposta": "Muitos cobrem, com limite baixo e condições específicas. Vale comparar o limite do cartão com o exigido pelo destino antes de decidir."
      }
    ],
    "relacionados": [
      "acidentes-pessoais",
      "equipamentos-portateis",
      "saude",
      "vida-individual"
    ]
  },
  "bike": {
    "nome": "Seguro Bike",
    "rotuloMenu": "Bike",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-bike",
    "url": "/bike/",
    "resumo": "Roubo, furto qualificado e danos à bicicleta, dentro e fora de casa.",
    "promessa": "Roubo, furto qualificado, colisão e danos a terceiros — dentro de casa, na rua e no percurso para o trabalho.",
    "chips": [
      "Cobertura fora de casa",
      "Danos a terceiros",
      "Competição opcional"
    ],
    "perfis": [
      {
        "titulo": "Bike de alto valor",
        "descricao": "O seguro residencial costuma cobrir só dentro de casa e com limite baixo."
      },
      {
        "titulo": "Quem pedala para trabalhar",
        "descricao": "Uso diário aumenta a exposição a roubo e a colisão com veículo."
      },
      {
        "titulo": "Quem participa de prova",
        "descricao": "Competição normalmente é cobertura adicional, contratada à parte."
      }
    ],
    "coberturas": [
      {
        "titulo": "Roubo e furto qualificado",
        "descricao": "Indenização pelo valor declarado da bicicleta."
      },
      {
        "titulo": "Danos por colisão e queda",
        "descricao": "Reparo do quadro, roda e componentes, conforme apólice."
      },
      {
        "titulo": "Responsabilidade civil",
        "descricao": "Dano causado a pedestre, a veículo ou a outro ciclista."
      },
      {
        "titulo": "Acidentes pessoais do ciclista",
        "descricao": "Morte, invalidez e despesas médicas."
      },
      {
        "titulo": "Cobertura em viagem e transporte",
        "descricao": "Bike levada no rack do carro ou despachada, quando prevista."
      }
    ],
    "exclusoes": [
      "Furto simples, sem arrombamento ou violência",
      "Desgaste de componentes e manutenção",
      "Competição não declarada",
      "Bicicleta deixada destrancada em via pública",
      "Acessórios não declarados na proposta"
    ],
    "faq": [
      {
        "pergunta": "O seguro da casa já não cobre a bike?",
        "resposta": "Cobre, em geral só dentro do imóvel e dentro do limite de conteúdo. O roubo de bicicleta acontece quase sempre fora de casa, que é justamente onde a apólice residencial para."
      },
      {
        "pergunta": "Preciso de nota fiscal?",
        "resposta": "Ajuda muito na contratação e no sinistro. Sem nota, a seguradora costuma pedir laudo ou avaliação para fixar o valor."
      },
      {
        "pergunta": "Bicicleta elétrica entra?",
        "resposta": "Depende da seguradora e da potência do motor. É um dos pontos que comparamos entre as parceiras."
      }
    ],
    "relacionados": [
      "acidentes-pessoais",
      "equipamentos-portateis",
      "residencial",
      "moto"
    ]
  },
  "equipamentos-portateis": {
    "nome": "Seguro de Equipamentos Portáteis",
    "rotuloMenu": "Equipamentos Portáteis",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-equipamentos-portateis",
    "url": "/equipamentos-portateis/",
    "resumo": "Celular, notebook e câmera contra roubo e quebra acidental.",
    "promessa": "Celular, notebook, tablet e câmera contra roubo, furto qualificado e quebra acidental — dentro e fora do Brasil.",
    "chips": [
      "Quebra acidental",
      "Roubo",
      "Cobertura no exterior"
    ],
    "perfis": [
      {
        "titulo": "Celular novo",
        "descricao": "O aparelho costuma valer mais que a franquia da assistência do fabricante."
      },
      {
        "titulo": "Equipamento de trabalho",
        "descricao": "Notebook e câmera de quem depende deles para faturar."
      },
      {
        "titulo": "Quem viaja com o equipamento",
        "descricao": "A maioria das apólices cobre fora do país, com prazo definido."
      }
    ],
    "coberturas": [
      {
        "titulo": "Roubo e furto qualificado",
        "descricao": "Indenização ou reposição do aparelho, conforme apólice."
      },
      {
        "titulo": "Quebra acidental",
        "descricao": "Queda, impacto e tela trincada, com franquia por evento."
      },
      {
        "titulo": "Danos elétricos",
        "descricao": "Curto-circuito e oscilação de energia."
      },
      {
        "titulo": "Cobertura no exterior",
        "descricao": "Vigência internacional pelo período previsto no contrato."
      },
      {
        "titulo": "Reposição por equipamento equivalente",
        "descricao": "Quando o modelo saiu de linha."
      }
    ],
    "exclusoes": [
      "Furto simples, sem arrombamento ou violência",
      "Perda e esquecimento",
      "Dano estético que não afete o funcionamento",
      "Equipamento sem nota fiscal ou sem número de série declarado",
      "Uso em desacordo com o manual do fabricante"
    ],
    "faq": [
      {
        "pergunta": "Cobre se eu deixar o celular cair?",
        "resposta": "Cobre, na cobertura de quebra acidental, com franquia por evento. É a cobertura mais acionada deste produto."
      },
      {
        "pergunta": "E se eu simplesmente perder o aparelho?",
        "resposta": "Perda e esquecimento não são cobertos por nenhuma seguradora. O que é coberto é roubo e furto qualificado, que exigem violência ou arrombamento."
      },
      {
        "pergunta": "Preciso da nota fiscal?",
        "resposta": "Precisa, junto com o número de série. É o que define o valor segurado e evita discussão no sinistro."
      }
    ],
    "relacionados": [
      "residencial",
      "viagem",
      "bike",
      "riscos-ciberneticos"
    ]
  },
  "festas-e-eventos": {
    "nome": "Seguro de Festas e Eventos",
    "rotuloMenu": "Festas e Eventos",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-festas-e-eventos",
    "url": "/festas-e-eventos/",
    "resumo": "Responsabilidade civil e danos ao espaço contratado.",
    "promessa": "Responsabilidade civil e danos ao espaço contratado — a exigência que quase todo buffet e salão faz hoje.",
    "chips": [
      "Exigido pelo espaço",
      "RC do organizador",
      "Contratação por evento"
    ],
    "perfis": [
      {
        "titulo": "Casamento e formatura",
        "descricao": "O contrato com o espaço costuma exigir apólice como condição de uso."
      },
      {
        "titulo": "Evento corporativo",
        "descricao": "Confraternização, treinamento e lançamento com público."
      },
      {
        "titulo": "Festa em espaço alugado",
        "descricao": "Aniversário, chá e confraternização em salão de festas ou chácara."
      }
    ],
    "coberturas": [
      {
        "titulo": "Responsabilidade civil do organizador",
        "descricao": "Danos corporais e materiais causados a convidados e a terceiros."
      },
      {
        "titulo": "Danos ao imóvel contratado",
        "descricao": "Estrutura, mobiliário e equipamentos do espaço."
      },
      {
        "titulo": "Incêndio e explosão",
        "descricao": "Durante a montagem, o evento e a desmontagem."
      },
      {
        "titulo": "Danos a equipamentos alugados",
        "descricao": "Som, iluminação, tenda e estrutura, quando declarados."
      },
      {
        "titulo": "Acidentes pessoais de convidados",
        "descricao": "Morte e invalidez por acidente durante o evento."
      }
    ],
    "exclusoes": [
      "Evento sem alvará ou fora das exigências do espaço",
      "Danos por consumo de álcool acima do previsto em contrato",
      "Fogos de artifício sem declaração prévia",
      "Roubo de bens pessoais de convidados",
      "Cancelamento do evento, salvo cobertura específica"
    ],
    "faq": [
      {
        "pergunta": "Com quanto tempo preciso contratar?",
        "resposta": "Quanto antes, melhor, e nunca no mesmo dia. As seguradoras trabalham com prazo mínimo entre a emissão e a data do evento. «PRAZO-EVENTO»"
      },
      {
        "pergunta": "O buffet não tem seguro próprio?",
        "resposta": "O seguro do espaço cobre o espaço, não a sua responsabilidade como organizador. São coberturas diferentes, e o contrato costuma deixar isso claro."
      },
      {
        "pergunta": "Cobre se chover e o evento não acontecer?",
        "resposta": "Cancelamento é cobertura à parte, nem sempre disponível, e depende do motivo. Precisa ser contratada especificamente."
      }
    ],
    "relacionados": [
      "acidentes-pessoais",
      "empresarial",
      "equipamentos-portateis",
      "residencial"
    ]
  },
  "fianca-locaticia": {
    "nome": "Seguro Fiança Locatícia",
    "rotuloMenu": "Fiança Locatícia",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-fianca-locaticia",
    "url": "/fianca-locaticia/",
    "resumo": "Alternativa ao fiador e à caução na hora de alugar.",
    "promessa": "Alugar sem fiador e sem depositar caução — o proprietário fica garantido e você paga em parcelas junto do aluguel.",
    "chips": [
      "Sem fiador",
      "Sem caução",
      "Parcelado"
    ],
    "perfis": [
      {
        "titulo": "Inquilino sem fiador",
        "descricao": "É a razão de existir do produto: destrava a locação sem depender de terceiro."
      },
      {
        "titulo": "Quem não quer imobilizar caixa",
        "descricao": "A caução exige depositar vários aluguéis de uma vez."
      },
      {
        "titulo": "Proprietário e imobiliária",
        "descricao": "Garantia com seguradora por trás, e não com uma pessoa física."
      }
    ],
    "coberturas": [
      {
        "titulo": "Aluguel em atraso",
        "descricao": "Pagamento ao proprietário pelo número de meses contratado."
      },
      {
        "titulo": "Encargos da locação",
        "descricao": "Condomínio, IPTU, água, luz e gás, quando incluídos na apólice."
      },
      {
        "titulo": "Danos ao imóvel",
        "descricao": "Reparos além do desgaste natural, apurados na vistoria de saída."
      },
      {
        "titulo": "Multa por rescisão contratual",
        "descricao": "Quando prevista no contrato de locação e contratada na apólice."
      },
      {
        "titulo": "Pintura interna",
        "descricao": "Cobertura opcional, comum em contrato residencial."
      }
    ],
    "exclusoes": [
      "Aluguel vencido antes do início da vigência",
      "Danos preexistentes registrados na vistoria de entrada",
      "Contrato de locação sem registro da garantia",
      "Uso do imóvel diferente do declarado",
      "Períodos além do número de meses contratado"
    ],
    "faq": [
      {
        "pergunta": "Quanto custa em relação à caução?",
        "resposta": "O seguro é pago em parcelas ao longo do contrato, em vez de um desembolso único de três aluguéis. A conta total depende do prazo e do perfil aprovado na análise."
      },
      {
        "pergunta": "Preciso passar por análise de crédito?",
        "resposta": "Precisa. A seguradora analisa o inquilino antes de aprovar, como faria um fiador."
      },
      {
        "pergunta": "O proprietário aceita?",
        "resposta": "É uma das garantias previstas na lei do inquilinato e amplamente aceita por imobiliárias. Quem recebe é o proprietário, direto da seguradora."
      }
    ],
    "relacionados": [
      "residencial",
      "condominio",
      "empresarial",
      "garantia"
    ]
  },
  "pets": {
    "nome": "Seguro para Pets",
    "rotuloMenu": "Seguro para Pets",
    "grupo": "Para você",
    "template": 1,
    "foto": "ph-pets",
    "url": "/saude-para-pets/",
    "resumo": "Consultas, exames e cirurgias do seu animal.",
    "promessa": "Consultas, exames, internação e cirurgia do seu animal — com rede credenciada ou reembolso, conforme o plano.",
    "chips": [
      "Consultas e exames",
      "Cirurgia",
      "Carência definida"
    ],
    "perfis": [
      {
        "titulo": "Filhote",
        "descricao": "Fase de mais consultas, vacinas e imprevistos. Entrar cedo evita restrição por preexistência."
      },
      {
        "titulo": "Animal adulto",
        "descricao": "O peso está em exame, internação e cirurgia, que é onde a conta do veterinário estoura."
      },
      {
        "titulo": "Mais de um animal",
        "descricao": "Algumas seguradoras dão condição melhor a partir do segundo pet."
      }
    ],
    "coberturas": [
      {
        "titulo": "Consultas e emergências",
        "descricao": "Atendimento clínico com número de acionamentos definido no plano."
      },
      {
        "titulo": "Exames laboratoriais e de imagem",
        "descricao": "Sangue, raio-x e ultrassom, conforme a cobertura contratada."
      },
      {
        "titulo": "Internação",
        "descricao": "Diárias em clínica credenciada, com limite anual."
      },
      {
        "titulo": "Cirurgia",
        "descricao": "Procedimentos cirúrgicos previstos em contrato, após carência."
      },
      {
        "titulo": "Responsabilidade civil por danos causados pelo animal",
        "descricao": "Cobertura opcional para mordida ou dano a terceiro."
      }
    ],
    "exclusoes": [
      "Doença preexistente à contratação",
      "Procedimento estético e cosmético",
      "Vacinas e vermífugos de rotina, salvo plano que os inclua",
      "Animal fora da faixa etária aceita pela seguradora",
      "Procedimentos ainda em carência"
    ],
    "faq": [
      {
        "pergunta": "Isso é plano de saúde animal?",
        "resposta": "Não. É um seguro, regulado pela SUSEP. Por isso o vocabulário é de cobertura, franquia e reembolso, e não o mesmo de um plano de saúde humano."
      },
      {
        "pergunta": "Tem carência?",
        "resposta": "Tem, e ela varia por cobertura: consulta costuma liberar antes, cirurgia demora mais. Os prazos são definidos por cada seguradora."
      },
      {
        "pergunta": "Meu veterinário precisa ser credenciado?",
        "resposta": "Depende do plano. Existem produtos com rede credenciada e produtos com livre escolha e reembolso. É a primeira coisa que comparamos."
      }
    ],
    "relacionados": [
      "residencial",
      "vida-individual",
      "acidentes-pessoais",
      "saude"
    ]
  },
  "empresarial": {
    "nome": "Seguro Empresarial",
    "rotuloMenu": "Empresarial",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "h-loja",
    "url": "/empresarial/",
    "resumo": "Patrimônio, lucros cessantes e responsabilidade civil do seu CNPJ.",
    "promessa": "Patrimônio, responsabilidade civil e lucros cessantes do seu CNPJ — dimensionados pelo que a empresa realmente tem, não por um pacote de prateleira.",
    "chips": [
      "Micro e pequena empresa",
      "RC operações",
      "Lucros cessantes"
    ],
    "gatilhoLegal": {
      "titulo": "Quando esse seguro entra na conta",
      "descricao": "Nenhuma lei obriga, mas contrato de locação comercial, financiamento de máquina e exigência de cliente grande costumam pedir apólice vigente. E, sem lucros cessantes, um incêndio que para a operação por 60 dias costuma custar mais que o prejuízo do imóvel."
    },
    "coberturas": [
      {
        "titulo": "Incêndio, raio e explosão",
        "descricao": "Prédio, benfeitorias, mercadorias e equipamentos, conforme valores declarados."
      },
      {
        "titulo": "Roubo e furto qualificado",
        "descricao": "Mercadoria, equipamento e valores em caixa, com limites separados."
      },
      {
        "titulo": "Responsabilidade civil de operações",
        "descricao": "Dano causado a cliente, fornecedor ou terceiro durante a atividade."
      },
      {
        "titulo": "Lucros cessantes",
        "descricao": "Faturamento que a empresa deixa de realizar enquanto não volta a operar."
      },
      {
        "titulo": "Danos elétricos e queda de energia",
        "descricao": "Equipamento queimado por oscilação, e perda de mercadoria refrigerada."
      },
      {
        "titulo": "Vidros, letreiro e fachada",
        "descricao": "Alta frequência em comércio de rua."
      }
    ],
    "exclusoes": [
      "Estoque acima do valor declarado na proposta",
      "Atividade diferente da declarada no CNAE informado",
      "Falha de manutenção e instalação elétrica irregular",
      "Lucros cessantes sem a cobertura contratada especificamente",
      "Bens de terceiros em poder da empresa, sem declaração"
    ],
    "dadosParaCotar": [
      "CNPJ, atividade e CNAE principal",
      "Endereço, área construída e tipo de construção",
      "Valor de mercadoria em estoque, em média e no pico",
      "Valor de máquinas e equipamentos",
      "Faturamento mensal médio, para dimensionar lucros cessantes",
      "Apólice atual, vencimento e histórico de sinistro"
    ],
    "faq": [
      {
        "pergunta": "Minha empresa é pequena. Compensa?",
        "resposta": "Compensa justamente pelo porte: empresa pequena não tem caixa para absorver a parada. O que muda é o dimensionamento, não a necessidade."
      },
      {
        "pergunta": "Trabalho de casa. Meu seguro residencial cobre?",
        "resposta": "Cobre a residência, não a atividade. Estoque, equipamento profissional e responsabilidade civil da operação ficam de fora da apólice residencial."
      },
      {
        "pergunta": "O que mais gera recusa de sinistro aqui?",
        "resposta": "Valor de estoque declarado abaixo do real. Quando isso acontece, a indenização é reduzida proporcionalmente — é o que o mercado chama de rateio."
      }
    ],
    "relacionados": [
      "condominio",
      "frota",
      "riscos-ciberneticos",
      "vida-em-grupo"
    ]
  },
  "condominio": {
    "nome": "Seguro de Condomínio",
    "rotuloMenu": "Condomínio",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "hero-condominio",
    "url": "/condominio/",
    "resumo": "A cobertura que a lei exige, mais responsabilidade civil do síndico.",
    "promessa": "A cobertura que a lei exige, mais o que a assembleia costuma descobrir que faltava: responsabilidade civil do síndico, danos elétricos, equipamentos e portões.",
    "chips": [
      "Obrigatório por lei",
      "RC do síndico",
      "Danos elétricos"
    ],
    "gatilhoLegal": {
      "titulo": "Condomínio sem seguro é irregularidade, não economia",
      "descricao": "A lei do condomínio, de 1964, e o Código Civil obrigam o seguro da edificação contra incêndio e destruição. Vale para condomínio vertical e horizontal, residencial, comercial ou misto — e a responsabilidade de contratar é do síndico."
    },
    "coberturas": [
      {
        "titulo": "Incêndio, raio e explosão",
        "descricao": "A cobertura básica exigida por lei, sobre a edificação inteira."
      },
      {
        "titulo": "Responsabilidade civil do síndico",
        "descricao": "Defesa e indenização por decisão de gestão que cause prejuízo a terceiro."
      },
      {
        "titulo": "Responsabilidade civil do condomínio",
        "descricao": "Queda de reboco, acidente na área comum, dano causado a visitante."
      },
      {
        "titulo": "Danos elétricos",
        "descricao": "Portão, bomba, interfone e elevador queimados por oscilação de energia."
      },
      {
        "titulo": "Vendaval, alagamento e impacto de veículos",
        "descricao": "Os três sinistros mais comuns em condomínio na nossa região."
      },
      {
        "titulo": "Equipamentos e vidros",
        "descricao": "Portaria, câmeras, playground e fachada envidraçada."
      }
    ],
    "exclusoes": [
      "Bens de dentro das unidades — isso é seguro residencial de cada morador",
      "Desgaste, infiltração antiga e falta de manutenção documentada",
      "Obra e reforma estrutural sem comunicação prévia à seguradora",
      "Área comum em uso diferente do declarado na proposta",
      "Multas e penalidades administrativas aplicadas ao condomínio"
    ],
    "dadosParaCotar": [
      "CNPJ do condomínio e nome da administradora",
      "Endereço, número de blocos e de unidades",
      "Ano de construção e valor de reconstrução estimado",
      "Área comum: elevador, piscina, salão, playground, portaria",
      "Apólice atual e data de vencimento",
      "Histórico de sinistro dos últimos três anos"
    ],
    "faq": [
      {
        "pergunta": "O seguro do condomínio cobre o que está dentro do meu apartamento?",
        "resposta": "Não. A apólice do condomínio cobre a edificação e as áreas comuns. O conteúdo de cada unidade é seguro residencial, contratado por cada morador."
      },
      {
        "pergunta": "Quem responde se o seguro estiver vencido?",
        "resposta": "A contratação é responsabilidade do síndico, e é ele quem responde perante o condomínio por deixar a edificação descoberta. Por isso a MX guarda a data de vencimento e avisa com antecedência."
      },
      {
        "pergunta": "RC do síndico é a mesma coisa que RC do condomínio?",
        "resposta": "São coberturas diferentes. A do condomínio responde por danos causados a terceiros pela edificação; a do síndico responde por decisões de gestão. Muita apólice barata traz só a primeira."
      }
    ],
    "relacionados": [
      "empresarial",
      "residencial",
      "riscos-de-engenharia",
      "vida-em-grupo"
    ]
  },
  "frota": {
    "nome": "Seguro de Frota",
    "rotuloMenu": "Frota",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "h-veiculo",
    "url": "/frota/",
    "resumo": "Todos os veículos da empresa em uma apólice só.",
    "promessa": "Todos os veículos da empresa em uma apólice só, com um vencimento, uma franquia negociada e um interlocutor no sinistro.",
    "chips": [
      "Apólice única",
      "Franquia negociada",
      "Gestão de vencimento"
    ],
    "gatilhoLegal": {
      "titulo": "A partir de quantos veículos vale a pena",
      "descricao": "Cada seguradora define um número mínimo — em geral entre quatro e cinco veículos — para tratar a conta como frota. A partir daí muda a lógica: a taxa passa a ser negociada pelo conjunto, e não por perfil de condutor, e a inclusão de um veículo novo não exige nova apólice."
    },
    "coberturas": [
      {
        "titulo": "Casco de todos os veículos",
        "descricao": "Colisão, incêndio, roubo e furto, com uma franquia definida para a frota."
      },
      {
        "titulo": "Danos a terceiros",
        "descricao": "Limite único aplicado a todos os veículos da apólice."
      },
      {
        "titulo": "Assistência 24 horas",
        "descricao": "Guincho e socorro compatíveis com o porte de cada veículo."
      },
      {
        "titulo": "Inclusão e exclusão durante a vigência",
        "descricao": "Veículo entra e sai da apólice sem recomeçar o contrato."
      },
      {
        "titulo": "Acidentes pessoais de passageiros",
        "descricao": "Motorista e ocupantes."
      },
      {
        "titulo": "Carro reserva por prioridade",
        "descricao": "Definido por tipo de veículo e por criticidade na operação."
      }
    ],
    "exclusoes": [
      "Veículo não incluído na relação da apólice",
      "Condutor sem habilitação na categoria exigida",
      "Uso do veículo para atividade diferente da declarada",
      "Transporte de carga de terceiro — isso é seguro de transporte",
      "Carga e equipamento agregado não declarados"
    ],
    "dadosParaCotar": [
      "CNPJ e atividade da empresa",
      "Relação de veículos: placa, modelo, ano e uso",
      "Cidade de pernoite de cada veículo",
      "Quem dirige: motoristas fixos ou uso compartilhado",
      "Sinistralidade dos últimos 24 meses",
      "Vencimento das apólices atuais, se estiverem separadas"
    ],
    "faq": [
      {
        "pergunta": "Posso incluir um veículo no meio da vigência?",
        "resposta": "Pode, e é a principal vantagem da frota. O veículo entra por endosso, com prêmio proporcional ao tempo restante."
      },
      {
        "pergunta": "Um sinistro encarece toda a frota?",
        "resposta": "A renovação é calculada pela sinistralidade do conjunto. Um evento isolado pesa pouco; frequência alta pesa muito."
      },
      {
        "pergunta": "Frota mista, com carro e caminhão, cabe na mesma apólice?",
        "resposta": "Cabe na maioria das seguradoras, com coberturas e franquias diferentes por tipo de veículo."
      }
    ],
    "relacionados": [
      "transportes",
      "caminhao",
      "empresarial",
      "automovel"
    ]
  },
  "transportes": {
    "nome": "Seguros de Transporte de Carga",
    "rotuloMenu": "Transportes",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-transportes",
    "url": "/transportes/",
    "resumo": "RCTR-C, RC-DC e RC-V para transportadora e para quem embarca carga.",
    "promessa": "RCTR-C, RC-DC e RC-V — os seguros que respondem pela carga de terceiro, para transportadora e para quem embarca.",
    "chips": [
      "RCTR-C",
      "RC-DC",
      "RC-V"
    ],
    "gatilhoLegal": {
      "titulo": "Quem transporta carga de terceiro precisa responder por ela",
      "descricao": "O seguro do veículo cobre o veículo. A carga de terceiro é objeto de apólice própria, e a exigência aparece no contrato com o embarcador, na subcontratação e na regulação do transporte rodoviário de cargas. A base factual deste produto já está levantada e validada no projeto da landing do transportador."
    },
    "coberturas": [
      {
        "titulo": "RCTR-C",
        "descricao": "Responsabilidade civil do transportador rodoviário por perdas e danos à carga durante o transporte."
      },
      {
        "titulo": "RC-DC",
        "descricao": "Desaparecimento de carga — o roubo, que a RCTR-C não alcança."
      },
      {
        "titulo": "RC-V",
        "descricao": "Responsabilidade civil do veículo por danos causados a terceiros, distinta do casco."
      },
      {
        "titulo": "Averbação de embarques",
        "descricao": "Registro das viagens que ativa a cobertura, feito por sistema ou por planilha."
      },
      {
        "titulo": "Gerenciamento de risco",
        "descricao": "Regras de rota, escolta e rastreamento exigidas pela seguradora."
      }
    ],
    "exclusoes": [
      "Embarque não averbado dentro do prazo do contrato",
      "Carga fora do tipo declarado na apólice",
      "Rota ou parada em desacordo com o plano de gerenciamento de risco",
      "Veículo sem rastreador ativo, quando exigido",
      "Carga própria — que exige produto diferente da RCTR-C"
    ],
    "dadosParaCotar": [
      "CNPJ, RNTRC e tipo de operação",
      "Tipo de carga transportada e valor médio por embarque",
      "Rotas e estados percorridos",
      "Frota própria, agregada ou subcontratada",
      "Faturamento anual de frete",
      "Apólice atual, vencimento e sinistralidade"
    ],
    "faq": [
      {
        "pergunta": "RCTR-C e RC-DC são a mesma coisa?",
        "resposta": "Não. A RCTR-C responde por perda e avaria; a RC-DC responde por desaparecimento da carga, que é o caso de roubo. Contratar só a primeira deixa o risco mais caro descoberto."
      },
      {
        "pergunta": "Preciso averbar todo embarque?",
        "resposta": "Precisa. A averbação é o que coloca aquela viagem dentro da apólice. Embarque não averbado é sinistro não coberto."
      },
      {
        "pergunta": "Transporto carga própria. Serve?",
        "resposta": "Não. RCTR-C cobre responsabilidade sobre carga de terceiro. Carga própria exige produto diferente — a gente indica na conversa."
      }
    ],
    "relacionados": [
      "caminhao",
      "frota",
      "empresarial",
      "garantia"
    ]
  },
  "agronegocios": {
    "nome": "Seguro para o Agronegócio",
    "rotuloMenu": "Agronegócios",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "h-maquina",
    "url": "/agronegocios/",
    "resumo": "Lavoura, penhor rural e o que o banco exige no financiamento.",
    "promessa": "Lavoura, benfeitorias, máquinas e o penhor que o banco exige no financiamento — com quem conhece a produção da região.",
    "chips": [
      "Lavoura",
      "Penhor rural",
      "Exigência de banco"
    ],
    "gatilhoLegal": {
      "titulo": "O banco costuma exigir antes de liberar",
      "descricao": "Financiamento de custeio e de investimento quase sempre condiciona a liberação ao seguro do bem financiado ou da lavoura. Fora isso, existe o programa de subvenção federal ao prêmio do seguro rural, cujas regras e disponibilidade mudam por safra e precisam ser confirmadas no ano da contratação."
    },
    "coberturas": [
      {
        "titulo": "Seguro de lavoura",
        "descricao": "Perda de produtividade por evento climático, conforme cultura e zoneamento."
      },
      {
        "titulo": "Penhor rural",
        "descricao": "Bem dado em garantia ao banco, exigência comum no crédito rural."
      },
      {
        "titulo": "Benfeitorias e instalações",
        "descricao": "Barracão, silo, estufa, curral e instalação elétrica."
      },
      {
        "titulo": "Máquinas e implementos",
        "descricao": "Trator, colheitadeira e pulverizador, no campo e no deslocamento."
      },
      {
        "titulo": "Responsabilidade civil rural",
        "descricao": "Dano causado a terceiro pela atividade, inclusive por deriva de aplicação."
      },
      {
        "titulo": "Vida e acidentes do produtor e da equipe",
        "descricao": "Cobertura das pessoas que tocam a operação."
      }
    ],
    "exclusoes": [
      "Cultura fora do zoneamento agrícola indicado para a região",
      "Plantio fora da janela recomendada",
      "Perda por manejo inadequado ou falta de trato cultural",
      "Máquina operada por pessoa sem treinamento, quando exigido",
      "Área plantada acima da declarada na proposta"
    ],
    "dadosParaCotar": [
      "Nome do produtor, CPF ou CNPJ e localização da propriedade",
      "Cultura, área plantada e produtividade esperada",
      "Existe irrigação? Qual sistema?",
      "Relação de máquinas e implementos, com ano e valor",
      "Financiamento envolvido e exigência do banco",
      "Histórico de perda nas últimas safras"
    ],
    "faq": [
      {
        "pergunta": "O seguro de lavoura cobre seca?",
        "resposta": "Depende da cultura, do zoneamento e do produto contratado. Evento climático é justamente o objeto da cobertura, mas cada apólice define quais eventos e qual o nível de perda que dispara a indenização."
      },
      {
        "pergunta": "Existe subvenção do governo?",
        "resposta": "Existe um programa federal de subvenção ao prêmio do seguro rural, com regras e orçamento que mudam por safra. Confirmamos a disponibilidade no ano da sua contratação. «SUBVENCAO»"
      },
      {
        "pergunta": "Preciso segurar tudo de uma vez?",
        "resposta": "Não. É comum começar pelo que o banco exige e ampliar depois para benfeitorias e máquinas."
      }
    ],
    "relacionados": [
      "maquinas-agricolas",
      "empresarial",
      "frota",
      "vida-em-grupo"
    ]
  },
  "maquinas-agricolas": {
    "nome": "Seguro de Máquinas Agrícolas",
    "rotuloMenu": "Máquinas Agrícolas",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-maquinas-agricolas",
    "url": "/maquinas-agricolas/",
    "resumo": "Colheitadeira, trator e implementos, no campo e no transporte.",
    "promessa": "Colheitadeira, trator, pulverizador e implementos — no campo, no barracão e no deslocamento entre talhões.",
    "chips": [
      "Casco da máquina",
      "Deslocamento",
      "Exigência de financiamento"
    ],
    "gatilhoLegal": {
      "titulo": "Máquina financiada raramente é opcional",
      "descricao": "O financiamento de máquina agrícola em geral exige cobertura vigente até a quitação, com o banco como beneficiário. Fora isso, o custo de uma colheitadeira parada em plena safra costuma superar o valor do prêmio anual."
    },
    "coberturas": [
      {
        "titulo": "Incêndio e explosão",
        "descricao": "Causa mais frequente de perda total em colheitadeira."
      },
      {
        "titulo": "Roubo e furto qualificado",
        "descricao": "Máquina inteira e componentes de alto valor."
      },
      {
        "titulo": "Colisão, capotagem e tombamento",
        "descricao": "Inclusive no deslocamento entre propriedades."
      },
      {
        "titulo": "Danos elétricos e eletrônicos",
        "descricao": "Central, sensores e sistema de piloto automático."
      },
      {
        "titulo": "Implementos acoplados",
        "descricao": "Plataforma, plantadeira e pulverizador, quando declarados."
      },
      {
        "titulo": "Responsabilidade civil do operador",
        "descricao": "Dano causado a terceiro durante a operação."
      }
    ],
    "exclusoes": [
      "Operação por pessoa sem habilitação ou treinamento exigido",
      "Uso fora da finalidade agrícola declarada",
      "Manutenção em atraso comprovada no sinistro",
      "Implemento não relacionado na apólice",
      "Trânsito em via pública sem sinalização exigida"
    ],
    "dadosParaCotar": [
      "Relação de máquinas: modelo, ano, número de série e valor",
      "Uso: própria, arrendada ou prestação de serviço a terceiro",
      "Onde a máquina fica guardada fora da safra",
      "Deslocamento em via pública, com frequência",
      "Financiamento e banco beneficiário",
      "Histórico de sinistro"
    ],
    "faq": [
      {
        "pergunta": "Cobre no deslocamento pela estrada?",
        "resposta": "Cobre, quando o deslocamento está declarado. É um item que muita apólice barata deixa de fora e que responde por boa parte dos sinistros."
      },
      {
        "pergunta": "Faço serviço para terceiros. Muda?",
        "resposta": "Muda o perfil de risco e precisa constar. Prestação de serviço aumenta horas de uso e exposição."
      },
      {
        "pergunta": "A plataforma da colheitadeira entra junto?",
        "resposta": "Entra se estiver declarada, com valor próprio. Ela costuma representar uma fatia grande do valor total."
      }
    ],
    "relacionados": [
      "agronegocios",
      "frota",
      "empresarial",
      "riscos-de-engenharia"
    ]
  },
  "vida-em-grupo": {
    "nome": "Seguro de Vida em Grupo",
    "rotuloMenu": "Vida em Grupo",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-vida-em-grupo",
    "url": "/vida-em-grupo/",
    "resumo": "Benefício para o time, com adesão simples e custo por vida.",
    "promessa": "Benefício para o time, com custo por vida e adesão simples — e, em muitos setores, exigência da convenção coletiva.",
    "chips": [
      "Custo por vida",
      "Sem exame",
      "Exigido em convenção"
    ],
    "gatilhoLegal": {
      "titulo": "Muita convenção coletiva já obriga",
      "descricao": "Diversas categorias têm, na convenção ou no acordo coletivo, cláusula que obriga o empregador a contratar seguro de vida em grupo para os empregados, com capital mínimo definido. Vale conferir a convenção da sua categoria antes de tratar o produto como opcional."
    },
    "coberturas": [
      {
        "titulo": "Morte por qualquer causa",
        "descricao": "Capital pago aos beneficiários do empregado."
      },
      {
        "titulo": "Morte acidental",
        "descricao": "Capital adicional quando a causa é acidente."
      },
      {
        "titulo": "Invalidez permanente por acidente",
        "descricao": "Indenização proporcional ao grau."
      },
      {
        "titulo": "Auxílio funeral",
        "descricao": "Cobertura de despesas, com opção de estender a familiares."
      },
      {
        "titulo": "Doenças graves",
        "descricao": "Antecipação de capital no diagnóstico, quando contratada."
      },
      {
        "titulo": "Cesta básica e auxílio para dependentes",
        "descricao": "Coberturas acessórias comuns em convenção coletiva."
      }
    ],
    "exclusoes": [
      "Empregado não incluído na movimentação mensal",
      "Capital acima do limite sem declaração de saúde",
      "Suicídio nos dois primeiros anos, conforme a lei",
      "Atividade de risco não declarada na proposta",
      "Períodos em que a apólice esteve em atraso"
    ],
    "dadosParaCotar": [
      "CNPJ, atividade e número de empregados",
      "Convenção coletiva aplicável e capital mínimo exigido",
      "Faixa etária e salarial do quadro",
      "Existe apólice atual? Qual seguradora e vencimento?",
      "Rotatividade média do quadro",
      "Se há interesse em estender a dependentes"
    ],
    "faq": [
      {
        "pergunta": "A partir de quantos funcionários?",
        "resposta": "A maioria das seguradoras trabalha a partir de três a cinco vidas, e algumas aceitam menos em plano coletivo por adesão. É um dos pontos que comparamos."
      },
      {
        "pergunta": "O empregado paga alguma parte?",
        "resposta": "Pode ser custeio total da empresa ou coparticipação, conforme a política adotada. A convenção coletiva às vezes define isso."
      },
      {
        "pergunta": "Precisa de exame médico?",
        "resposta": "Em geral não, dentro do capital padrão do grupo. Capitais mais altos podem exigir declaração de saúde individual."
      }
    ],
    "relacionados": [
      "estagiario",
      "saude",
      "odontologico",
      "empresarial"
    ]
  },
  "estagiario": {
    "nome": "Seguro para Estagiário",
    "rotuloMenu": "Estagiário",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-estagiario",
    "url": "/estagiario/",
    "resumo": "O seguro de acidentes pessoais que a Lei do Estágio exige.",
    "promessa": "O seguro de acidentes pessoais que a lei do estágio exige da parte concedente — emitido rápido, porque o estágio não começa sem ele.",
    "chips": [
      "Exigido por lei",
      "Emissão rápida",
      "Custo baixo"
    ],
    "gatilhoLegal": {
      "titulo": "Sem apólice, o estágio não pode começar",
      "descricao": "A lei do estágio atribui à parte concedente a obrigação de contratar seguro contra acidentes pessoais em favor do estagiário, e o número da apólice costuma ser exigido no termo de compromisso pela instituição de ensino. É uma exigência formal, verificada no papel."
    },
    "coberturas": [
      {
        "titulo": "Morte acidental",
        "descricao": "Capital pago aos beneficiários do estagiário."
      },
      {
        "titulo": "Invalidez permanente por acidente",
        "descricao": "Indenização proporcional ao grau de invalidez."
      },
      {
        "titulo": "Despesas médicas e hospitalares",
        "descricao": "Reembolso dos gastos decorrentes do acidente."
      },
      {
        "titulo": "Assistência funeral",
        "descricao": "Cobertura das despesas."
      },
      {
        "titulo": "Movimentação de vidas",
        "descricao": "Inclusão e exclusão de estagiários durante a vigência."
      }
    ],
    "exclusoes": [
      "Doença — a cobertura é exclusivamente para acidente",
      "Estagiário não incluído na movimentação da apólice",
      "Atividade diferente da prevista no termo de compromisso",
      "Acidente sob efeito de álcool ou substância psicoativa",
      "Períodos anteriores à emissão da apólice"
    ],
    "dadosParaCotar": [
      "CNPJ da empresa concedente",
      "Número de estagiários, atual e previsto",
      "Atividades exercidas e se há deslocamento externo",
      "Instituição de ensino e exigência de capital mínimo, se houver",
      "Data de início do primeiro termo de compromisso"
    ],
    "faq": [
      {
        "pergunta": "Quem contrata: a empresa ou a faculdade?",
        "resposta": "A obrigação é da parte concedente do estágio, ou seja, da empresa. Quando há agente de integração, o contrato pode prever que ele assuma — mas a exigência nasce na concedente."
      },
      {
        "pergunta": "Quanto tempo leva para emitir?",
        "resposta": "É um dos produtos mais rápidos da carteira, justamente porque trava a contratação do estagiário. «PRAZO»"
      },
      {
        "pergunta": "Posso incluir estagiários ao longo do ano?",
        "resposta": "Pode. A apólice é coletiva e aceita movimentação de vidas durante a vigência."
      }
    ],
    "relacionados": [
      "vida-em-grupo",
      "acidentes-pessoais",
      "empresarial",
      "saude"
    ]
  },
  "garantia": {
    "nome": "Seguro Garantia",
    "rotuloMenu": "Garantia",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-garantia",
    "url": "/garantia/",
    "resumo": "A garantia que o edital ou o contrato pede, sem imobilizar caixa.",
    "promessa": "A garantia que o edital ou o contrato pede, sem imobilizar caixa nem travar o limite de crédito no banco.",
    "chips": [
      "Licitação",
      "Execução de contrato",
      "Sem imobilizar caixa"
    ],
    "gatilhoLegal": {
      "titulo": "Quando o edital exige garantia",
      "descricao": "Contratos públicos e privados de maior porte costumam exigir garantia na participação da licitação e na execução do contrato. O seguro garantia é uma das modalidades aceitas, ao lado da caução em dinheiro e da fiança bancária — e é a única que não retira dinheiro do caixa nem consome limite bancário."
    },
    "coberturas": [
      {
        "titulo": "Garantia de licitante",
        "descricao": "Assegura que o vencedor vai assinar o contrato."
      },
      {
        "titulo": "Garantia de execução do contrato",
        "descricao": "Assegura o cumprimento das obrigações contratadas."
      },
      {
        "titulo": "Garantia de adiantamento de pagamento",
        "descricao": "Cobre valores antecipados pelo contratante."
      },
      {
        "titulo": "Garantia judicial",
        "descricao": "Substitui depósito em processo, quando aceita pelo juízo."
      },
      {
        "titulo": "Retenção de pagamentos",
        "descricao": "Libera valores retidos durante a execução."
      }
    ],
    "exclusoes": [
      "Obrigação assumida antes da emissão da apólice",
      "Contrato alterado sem anuência da seguradora",
      "Descumprimento por fato do próprio contratante",
      "Multas sem previsão no contrato garantido",
      "Prorrogação de prazo não comunicada"
    ],
    "dadosParaCotar": [
      "CNPJ, tempo de atividade e faturamento",
      "Edital ou contrato que exige a garantia",
      "Valor e prazo da garantia exigida",
      "Modalidade pedida: licitante, execução, adiantamento",
      "Balanço dos últimos exercícios",
      "Garantias vigentes em outras seguradoras"
    ],
    "faq": [
      {
        "pergunta": "É a mesma coisa que fiança bancária?",
        "resposta": "Cumpre a mesma função, mas não consome o seu limite de crédito no banco e costuma sair mais barato. A análise é de capacidade técnica e financeira, feita pela seguradora."
      },
      {
        "pergunta": "Quanto tempo leva a análise?",
        "resposta": "Depende do porte e do histórico da empresa. Empresa com cadastro já aprovado na seguradora emite muito mais rápido — por isso vale abrir o cadastro antes de precisar. «PRAZO»"
      },
      {
        "pergunta": "Se eu não cumprir o contrato, a seguradora paga e esquece?",
        "resposta": "A seguradora indeniza o contratante e depois cobra da sua empresa. O seguro garante o beneficiário, não isenta o tomador."
      }
    ],
    "relacionados": [
      "riscos-de-engenharia",
      "empresarial",
      "transportes",
      "grandes-riscos"
    ]
  },
  "riscos-de-engenharia": {
    "nome": "Seguro de Riscos de Engenharia",
    "rotuloMenu": "Riscos de Engenharia",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-riscos-de-engenharia",
    "url": "/riscos-de-engenharia/",
    "resumo": "Obra e montagem cobertas do canteiro até a entrega.",
    "promessa": "Obra e montagem cobertas do canteiro até a entrega — inclusive o dano ao que já está construído e ao vizinho.",
    "chips": [
      "Obra civil",
      "Montagem",
      "RC cruzada"
    ],
    "gatilhoLegal": {
      "titulo": "Financiador e contratante costumam exigir",
      "descricao": "Obra financiada, contrato com incorporadora e licenciamento de obra de maior porte costumam condicionar o início à apólice vigente. A cobertura acompanha o cronograma: começa na mobilização do canteiro e termina na entrega, com período de manutenção opcional."
    },
    "coberturas": [
      {
        "titulo": "Danos à obra em execução",
        "descricao": "Incêndio, desabamento, vendaval e erro de execução, conforme apólice."
      },
      {
        "titulo": "Responsabilidade civil geral e cruzada",
        "descricao": "Dano a terceiros e entre empresas que atuam no mesmo canteiro."
      },
      {
        "titulo": "Danos a imóveis vizinhos",
        "descricao": "Trinca, recalque e dano por escavação — a reclamação mais comum em obra urbana."
      },
      {
        "titulo": "Equipamentos e maquinário do canteiro",
        "descricao": "Guindaste, betoneira, andaime e ferramenta, quando declarados."
      },
      {
        "titulo": "Despesas de desentulho",
        "descricao": "Remoção de escombro após o sinistro."
      },
      {
        "titulo": "Período de manutenção",
        "descricao": "Cobertura por prazo definido após a entrega."
      }
    ],
    "exclusoes": [
      "Vício de projeto não coberto pela cobertura contratada",
      "Obra iniciada antes da emissão da apólice",
      "Descumprimento de norma técnica e de licenciamento",
      "Prorrogação de prazo sem comunicar a seguradora",
      "Prejuízo por atraso, salvo cobertura específica"
    ],
    "dadosParaCotar": [
      "CNPJ da construtora e do contratante",
      "Tipo de obra, endereço e valor total do contrato",
      "Cronograma: data de início e prazo de execução",
      "Existem imóveis vizinhos lindeiros? Há escavação?",
      "Equipamentos próprios e alugados no canteiro",
      "Exigência do financiador, se houver"
    ],
    "faq": [
      {
        "pergunta": "Cobre trinca na casa do vizinho?",
        "resposta": "Cobre, na cobertura de danos a imóveis vizinhos — que é contratada à parte e é justamente a mais acionada em obra urbana."
      },
      {
        "pergunta": "Posso contratar com a obra já em andamento?",
        "resposta": "É possível em alguns casos, com vistoria e com exclusão do que já ocorreu. O correto e mais barato é contratar antes da mobilização."
      },
      {
        "pergunta": "Vale para reforma?",
        "resposta": "Vale, com dimensionamento diferente. Reforma estrutural em prédio ocupado é um dos cenários de maior risco de dano a terceiro."
      }
    ],
    "relacionados": [
      "garantia",
      "condominio",
      "grandes-riscos",
      "empresarial"
    ]
  },
  "riscos-ciberneticos": {
    "nome": "Seguro de Riscos Cibernéticos",
    "rotuloMenu": "Riscos Cibernéticos",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-riscos-ciberneticos",
    "url": "/riscos-ciberneticos/",
    "resumo": "Ataque, vazamento de dados e parada de sistema.",
    "promessa": "Ataque, sequestro de dados e parada de sistema — com resposta a incidente, não só indenização depois do estrago.",
    "chips": [
      "Resposta a incidente",
      "LGPD",
      "Parada de sistema"
    ],
    "gatilhoLegal": {
      "titulo": "O produto é novo, o risco não",
      "descricao": "Empresa pequena virou alvo justamente por ter menos defesa. Somado a isso, a LGPD criou obrigações de comunicação e de reparação em caso de vazamento de dados pessoais — e é aí que a conta de um incidente deixa de ser só técnica e vira jurídica."
    },
    "coberturas": [
      {
        "titulo": "Resposta a incidente",
        "descricao": "Equipe técnica acionada para conter o ataque, com prazo de atendimento contratado."
      },
      {
        "titulo": "Extorsão cibernética",
        "descricao": "Apoio na negociação e cobertura de custos em sequestro de dados."
      },
      {
        "titulo": "Recuperação de dados e sistemas",
        "descricao": "Custo de reconstrução de bases e reinstalação."
      },
      {
        "titulo": "Interrupção de negócios",
        "descricao": "Faturamento perdido enquanto o sistema está fora."
      },
      {
        "titulo": "Responsabilidade por vazamento de dados",
        "descricao": "Defesa, indenização a terceiros e custos de comunicação aos titulares."
      },
      {
        "titulo": "Multas administrativas",
        "descricao": "Quando seguráveis, conforme a legislação aplicável."
      }
    ],
    "exclusoes": [
      "Incidente iniciado antes da vigência da apólice",
      "Falta de controles mínimos declarados na proposta, como backup e antivírus",
      "Ato doloso de sócio ou administrador",
      "Perda de valor de mercado e de reputação",
      "Falha de infraestrutura de terceiro fora do escopo contratado"
    ],
    "dadosParaCotar": [
      "CNPJ, atividade e faturamento anual",
      "Quantos dados pessoais de clientes a empresa guarda",
      "Sistemas críticos e se há backup testado",
      "Já houve incidente nos últimos 24 meses?",
      "Uso de nuvem e de fornecedores de TI",
      "Quem responde pela segurança da informação"
    ],
    "faq": [
      {
        "pergunta": "Minha empresa é pequena demais para ser alvo?",
        "resposta": "Ataque automatizado não escolhe porte. Empresa pequena costuma ser alvo mais fácil, e é a que tem menos caixa para absorver dias parados."
      },
      {
        "pergunta": "O seguro paga o resgate?",
        "resposta": "Alguns produtos cobrem custos de extorsão dentro de limites e condições. O valor maior, porém, costuma estar na resposta a incidente e na recuperação, não no resgate."
      },
      {
        "pergunta": "Preciso ter alguma proteção antes de contratar?",
        "resposta": "Precisa. As seguradoras exigem controles mínimos declarados na proposta, como backup e antivírus. Sem eles, a cobertura pode ser recusada."
      }
    ],
    "relacionados": [
      "empresarial",
      "equipamentos-portateis",
      "grandes-riscos",
      "garantia"
    ]
  },
  "grandes-riscos": {
    "nome": "Seguro de Grandes Riscos",
    "rotuloMenu": "Grandes Riscos",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "ph-grandes-riscos",
    "url": "/grandes-riscos/",
    "resumo": "Apólice negociada cláusula a cláusula para operação industrial.",
    "promessa": "Apólice negociada cláusula a cláusula para operação industrial — onde o produto de prateleira não alcança.",
    "chips": [
      "Riscos nomeados",
      "Operacional",
      "Negociação de cláusula"
    ],
    "gatilhoLegal": {
      "titulo": "Quando a empresa sai do pacote padrão",
      "descricao": "A partir de certo porte de patrimônio e de faturamento, a apólice deixa de ser um produto pronto e passa a ser um contrato negociado, com maior liberdade contratual entre segurado e seguradora. É onde a corretora deixa de comparar preço e passa a discutir cláusula, franquia e limite por evento."
    },
    "coberturas": [
      {
        "titulo": "Riscos nomeados",
        "descricao": "Cobertura para eventos listados um a um no contrato."
      },
      {
        "titulo": "Riscos operacionais",
        "descricao": "Cobertura ampla, com exclusões nomeadas em vez de coberturas nomeadas."
      },
      {
        "titulo": "Lucros cessantes industriais",
        "descricao": "Margem perdida durante a parada, com período indenitário negociado."
      },
      {
        "titulo": "Quebra de máquinas",
        "descricao": "Dano interno a equipamento crítico da linha de produção."
      },
      {
        "titulo": "Responsabilidade civil de produtos",
        "descricao": "Dano causado a terceiro pelo produto após a venda."
      },
      {
        "titulo": "Danos elétricos e ambientais",
        "descricao": "Conforme escopo negociado e estudo de risco."
      }
    ],
    "exclusoes": [
      "Manutenção preventiva fora do plano declarado",
      "Paralisação por falta de matéria-prima, sem cobertura específica",
      "Poluição gradual, salvo contratação específica",
      "Equipamento fora do inventário informado",
      "Descumprimento de recomendação de vistoria de risco"
    ],
    "dadosParaCotar": [
      "CNPJ, atividade industrial e faturamento anual",
      "Valor em risco: prédio, máquinas, estoque e matéria-prima",
      "Layout da planta e sistemas de proteção contra incêndio",
      "Equipamentos críticos e tempo de reposição de cada um",
      "Histórico de sinistro dos últimos cinco anos",
      "Programa de manutenção e laudos técnicos existentes"
    ],
    "faq": [
      {
        "pergunta": "O que muda em relação ao seguro empresarial?",
        "resposta": "Muda a natureza do contrato. Aqui a apólice é negociada, com maior liberdade para ajustar cláusula, franquia e limite. E a corretora participa da negociação técnica, não só da cotação."
      },
      {
        "pergunta": "Quanto tempo leva uma cotação dessas?",
        "resposta": "Semanas, não dias. Envolve vistoria de risco, levantamento de valores e negociação com mais de uma seguradora — às vezes com resseguro."
      },
      {
        "pergunta": "Minha indústria é média. Já entra aqui?",
        "resposta": "Depende do valor em risco e da complexidade da operação. Na conversa inicial a gente identifica se o caminho é este ou o seguro empresarial bem dimensionado."
      }
    ],
    "relacionados": [
      "empresarial",
      "riscos-de-engenharia",
      "riscos-ciberneticos",
      "frota"
    ]
  },
  "saude": {
    "nome": "Plano de Saúde",
    "rotuloMenu": "Saúde",
    "grupo": "Saúde e previdência",
    "template": 4,
    "foto": "ph-saude",
    "url": "/saude/",
    "resumo": "Individual, familiar, por empresa ou por adesão a entidade de classe.",
    "promessa": "Individual, para a família, pela empresa ou por adesão. A MX compara operadoras, rede credenciada e carência antes de você assinar — e continua por perto na renovação.",
    "chips": [
      "Rede credenciada",
      "Carência",
      "Por vidas"
    ],
    "perfis": [
      {
        "titulo": "Individual e familiar",
        "descricao": "Você escolhe a operadora e paga direto. Rede e carência são o que mais pesam."
      },
      {
        "titulo": "Empresarial (PME)",
        "descricao": "A partir de duas vidas na maioria das operadoras, com preço melhor que o individual."
      },
      {
        "titulo": "Por adesão",
        "descricao": "Para quem tem vínculo com entidade de classe, sindicato ou conselho profissional."
      }
    ],
    "coberturas": [
      {
        "titulo": "Rol da ANS",
        "descricao": "Consultas, exames, internação e procedimentos da cobertura mínima obrigatória."
      },
      {
        "titulo": "Rede credenciada",
        "descricao": "Quais hospitais e laboratórios atendem, aqui e nas cidades vizinhas."
      },
      {
        "titulo": "Abrangência",
        "descricao": "Municipal, regional, estadual ou nacional — muda preço e muda uso real."
      },
      {
        "titulo": "Acomodação",
        "descricao": "Enfermaria ou apartamento na internação."
      },
      {
        "titulo": "Reembolso",
        "descricao": "Existe em alguns planos, com limite por procedimento e prazo para pedir."
      },
      {
        "titulo": "Coparticipação",
        "descricao": "Mensalidade menor, com um valor por consulta e exame usado."
      }
    ],
    "carencias": [
      {
        "titulo": "Urgência e emergência",
        "descricao": "24 horas"
      },
      {
        "titulo": "Parto a termo",
        "descricao": "300 dias"
      },
      {
        "titulo": "Demais casos",
        "descricao": "até 180 dias"
      },
      {
        "titulo": "Doença ou lesão preexistente",
        "descricao": "até 24 meses de cobertura parcial temporária"
      }
    ],
    "exclusoes": [
      "Procedimento fora do rol e da cobertura contratada",
      "Tratamento em prestador fora da rede, salvo reembolso contratado",
      "Procedimento estético sem indicação clínica",
      "Períodos ainda em carência",
      "Doença preexistente não declarada na entrevista"
    ],
    "dadosParaCotar": [
      "Quantas vidas e a idade de cada uma",
      "Cidade onde o plano será usado com mais frequência",
      "Hospital e laboratório que a família já usa",
      "Preferência por enfermaria ou apartamento",
      "Plano atual, operadora e tempo de permanência",
      "Interesse em coparticipação para reduzir a mensalidade"
    ],
    "faq": [
      {
        "pergunta": "Consigo aproveitar a carência do plano antigo?",
        "resposta": "Em muitos casos sim, pela portabilidade de carências, desde que cumpridos os requisitos de prazo e de compatibilidade de faixa de preço. A MX verifica isso antes de propor a troca."
      },
      {
        "pergunta": "Por que o preço sobe tanto com a idade?",
        "resposta": "O reajuste por faixa etária é previsto em contrato e regulado. Entender a tabela de faixas antes de assinar é mais importante que a mensalidade do primeiro ano."
      },
      {
        "pergunta": "A MX resolve autorização de procedimento?",
        "resposta": "Não. A MX é corretora: compara, orienta e acompanha. Autorização, rede e cobertura são definidas pela operadora, dentro da regra da ANS."
      }
    ],
    "relacionados": [
      "odontologico",
      "vida-em-grupo",
      "previdencia",
      "acidentes-pessoais"
    ]
  },
  "odontologico": {
    "nome": "Plano Odontológico",
    "rotuloMenu": "Odontológico",
    "grupo": "Saúde e previdência",
    "template": 4,
    "foto": "ph-odontologico",
    "url": "/odontologico/",
    "resumo": "Plano dental com rede credenciada, individual ou pela empresa.",
    "promessa": "Consulta, limpeza, restauração e urgência com rede credenciada — individual, familiar ou como benefício da empresa.",
    "chips": [
      "Ticket baixo",
      "Sem coparticipação",
      "Benefício de PME"
    ],
    "perfis": [
      {
        "titulo": "Individual e familiar",
        "descricao": "Custo baixo e uso frequente. É o plano com melhor relação entre preço e uso real."
      },
      {
        "titulo": "Empresarial",
        "descricao": "Benefício de entrada, muito usado para compor pacote sem pesar na folha."
      },
      {
        "titulo": "Complemento do plano de saúde",
        "descricao": "Boa parte dos planos médicos não cobre odontologia."
      }
    ],
    "coberturas": [
      {
        "titulo": "Rol odontológico da ANS",
        "descricao": "Procedimentos da cobertura mínima obrigatória."
      },
      {
        "titulo": "Consultas e diagnóstico",
        "descricao": "Avaliação clínica e radiografias previstas em contrato."
      },
      {
        "titulo": "Prevenção",
        "descricao": "Limpeza, aplicação de flúor e orientação de higiene."
      },
      {
        "titulo": "Dentística e endodontia",
        "descricao": "Restauração e tratamento de canal."
      },
      {
        "titulo": "Cirurgia oral menor",
        "descricao": "Extração e procedimentos previstos no rol."
      },
      {
        "titulo": "Urgência 24 horas",
        "descricao": "Atendimento de dor e trauma, conforme rede."
      }
    ],
    "carencias": [
      {
        "titulo": "Urgência e emergência",
        "descricao": "24 horas"
      },
      {
        "titulo": "Consultas e prevenção",
        "descricao": "prazo curto, definido pela operadora"
      },
      {
        "titulo": "Demais procedimentos",
        "descricao": "até 180 dias"
      },
      {
        "titulo": "Doença preexistente",
        "descricao": "até 24 meses de cobertura parcial temporária"
      }
    ],
    "exclusoes": [
      "Procedimento estético, como clareamento e faceta, salvo plano específico",
      "Ortodontia, quando não incluída no plano contratado",
      "Implante, na maioria dos planos de entrada",
      "Tratamento iniciado antes da vigência",
      "Prestador fora da rede credenciada"
    ],
    "dadosParaCotar": [
      "Quantas vidas e idades",
      "Cidade de uso e dentistas de preferência",
      "Interesse em ortodontia ou implante",
      "Plano atual, se houver",
      "Se é contratação individual ou pela empresa"
    ],
    "faq": [
      {
        "pergunta": "Cobre aparelho ortodôntico?",
        "resposta": "Depende do plano. Ortodontia costuma ser cobertura adicional, com carência maior e coparticipação nos aparelhos. É o primeiro item a conferir se esse for o objetivo."
      },
      {
        "pergunta": "Preciso ter plano de saúde para contratar?",
        "resposta": "Não. O plano odontológico é contratado de forma independente."
      },
      {
        "pergunta": "Tem limite de uso por ano?",
        "resposta": "O rol define os procedimentos cobertos e a periodicidade de alguns, como limpeza. Não é um limite financeiro, é um limite de indicação clínica."
      }
    ],
    "relacionados": [
      "saude",
      "vida-em-grupo",
      "estagiario",
      "previdencia"
    ]
  },
  "previdencia": {
    "nome": "Previdência Privada",
    "rotuloMenu": "Previdência",
    "grupo": "Saúde e previdência",
    "template": 4,
    "foto": "ph-previdencia",
    "url": "/previdencia/",
    "resumo": "PGBL e VGBL para planejar o longo prazo com orientação de corretor.",
    "promessa": "PGBL e VGBL para planejar o longo prazo — com a escolha do regime tributário feita junto de um corretor, não no automático do aplicativo.",
    "chips": [
      "PGBL e VGBL",
      "Regime tributário",
      "Sucessão"
    ],
    "perfis": [
      {
        "titulo": "Quem declara no modelo completo",
        "descricao": "O PGBL permite deduzir aportes até o limite legal da base de cálculo do imposto de renda."
      },
      {
        "titulo": "Quem declara no modelo simplificado",
        "descricao": "O VGBL costuma ser o caminho, porque a tributação incide só sobre o rendimento."
      },
      {
        "titulo": "Planejamento sucessório",
        "descricao": "Os recursos vão aos beneficiários indicados, sem passar por inventário."
      }
    ],
    "coberturas": [
      {
        "titulo": "PGBL",
        "descricao": "Aportes dedutíveis até o limite legal; no resgate, o imposto incide sobre o total."
      },
      {
        "titulo": "VGBL",
        "descricao": "Sem dedução na declaração; no resgate, o imposto incide apenas sobre o rendimento."
      },
      {
        "titulo": "Regime regressivo",
        "descricao": "A alíquota cai conforme o tempo de permanência de cada aporte."
      },
      {
        "titulo": "Regime progressivo",
        "descricao": "Segue a tabela do imposto de renda, com ajuste na declaração."
      },
      {
        "titulo": "Portabilidade",
        "descricao": "Troca de fundo ou de seguradora sem resgatar e sem novo imposto."
      },
      {
        "titulo": "Indicação de beneficiários",
        "descricao": "Definida em contrato, com pagamento direto."
      }
    ],
    "carencias": [],
    "exclusoes": [
      "Nenhuma promessa de rentabilidade: o resultado depende do fundo escolhido",
      "Resgate antes do prazo altera a alíquota no regime regressivo",
      "Taxa de administração e de carregamento reduzem o resultado",
      "Mudança de regime tributário só é possível em situações previstas",
      "Dedução do PGBL limitada ao percentual legal da renda tributável"
    ],
    "dadosParaCotar": [
      "Objetivo: aposentadoria, sucessão ou reserva de longo prazo",
      "Modelo de declaração de imposto de renda",
      "Prazo pretendido de acumulação",
      "Valor de aporte inicial e mensal",
      "Planos de previdência já existentes, para avaliar portabilidade"
    ],
    "faq": [
      {
        "pergunta": "PGBL ou VGBL?",
        "resposta": "A resposta depende do seu modelo de declaração. Completo, PGBL tende a fazer sentido pela dedução; simplificado, VGBL. É a primeira conversa que temos, antes de qualquer fundo."
      },
      {
        "pergunta": "Qual regime tributário escolher?",
        "resposta": "O regressivo premia quem fica muito tempo, com alíquota decrescente. O progressivo faz mais sentido em horizonte curto ou renda baixa no resgate. A escolha, em geral, é definitiva."
      },
      {
        "pergunta": "A MX indica rentabilidade?",
        "resposta": "Não indicamos nem projetamos rentabilidade — nenhuma corretora séria faz isso. Orientamos sobre estrutura, tributação, taxas e portabilidade."
      }
    ],
    "relacionados": [
      "vida-individual",
      "saude",
      "vida-em-grupo",
      "odontologico"
    ]
  }
,
  "responsabilidade-civil-profissional": {
    "nome": "Seguro de Responsabilidade Civil Profissional",
    "rotuloMenu": "RC Profissional",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "h-documento",
    "url": "/responsabilidade-civil-profissional/",
    "resumo": "Cobre o prejuízo que um erro seu no trabalho causa a um cliente.",
    "promessa": "Engenheiro, contador, advogado, arquiteto, consultor: quando um erro técnico vira prejuízo para o cliente, é esta apólice que responde — inclusive pelo custo de se defender.",
    "chips": [
      "Erro e omissão",
      "Custas de defesa",
      "Retroatividade"
    ],
    "gatilhoLegal": {
      "titulo": "Contrato, licitação e conselho de classe",
      "descricao": "Não é obrigatório por lei geral, mas é exigido em contrato por boa parte dos clientes corporativos, aparece como requisito em licitação e, em algumas profissões regulamentadas, é cobrado pelo conselho. Quem presta serviço técnico costuma descobrir a exigência no meio da negociação."
    },
    "coberturas": [
      {
        "titulo": "Erro, omissão ou negligência",
        "descricao": "Dano que o seu serviço causa ao cliente — cálculo errado, prazo perdido, projeto com falha, orientação equivocada."
      },
      {
        "titulo": "Custas de defesa",
        "descricao": "Honorários de advogado, perícia e custas processuais, mesmo quando a ação é julgada improcedente no fim."
      },
      {
        "titulo": "Retroatividade",
        "descricao": "Cobre serviço prestado antes da apólice, desde a data acordada. É o item que mais muda de preço entre seguradoras."
      },
      {
        "titulo": "Prazo complementar",
        "descricao": "Janela para reclamar depois do fim da apólice. Importante porque erro técnico costuma aparecer anos depois."
      },
      {
        "titulo": "Danos morais",
        "descricao": "Indenização por dano moral decorrente do erro profissional, quando contratada."
      },
      {
        "titulo": "Sócios e empregados",
        "descricao": "Estende a cobertura à equipe que assina tecnicamente pela empresa, não só ao titular."
      }
    ],
    "exclusoes": [
      "Ato doloso — erro é coberto, fraude não",
      "Multa e penalidade administrativa aplicada por órgão regulador",
      "Obrigação assumida em contrato além do que a lei exige",
      "Serviço prestado sem o registro profissional exigido",
      "Prejuízo que o segurado já sabia existir quando contratou",
      "Perda de lucro do próprio segurado"
    ],
    "dadosParaCotar": [
      "Qual profissão e qual o registro no conselho",
      "Faturamento anual com prestação de serviço",
      "Quantas pessoas assinam tecnicamente pela empresa",
      "Desde quando você presta esse serviço — define a retroatividade",
      "Se houve reclamação ou processo nos últimos cinco anos",
      "Limite de indenização exigido em contrato, se houver"
    ],
    "faq": [
      {
        "pergunta": "Cobre erro que cometi antes de contratar o seguro?",
        "resposta": "Só se a apólice tiver retroatividade e a data acordada alcançar aquele serviço. Sem isso o erro antigo fica de fora — por isso a data de retroatividade é o campo mais importante da proposta."
      },
      {
        "pergunta": "E se a ação for julgada improcedente?",
        "resposta": "A cobertura de custas de defesa vale mesmo assim. Boa parte do prejuízo de um processo é advogado e perícia, não indenização."
      },
      {
        "pergunta": "Vale para pessoa física ou só para empresa?",
        "resposta": "Existem apólices para os dois. Autônomo com registro no conselho contrata como pessoa física; escritório com CNPJ contrata como empresa e estende aos sócios."
      }
    ],
    "relacionados": [
      "empresarial",
      "riscos-ciberneticos",
      "responsabilidade-civil-medico-e-dentista",
      "garantia"
    ]
  },
  "responsabilidade-civil-medico-e-dentista": {
    "nome": "Seguro de Responsabilidade Civil para Médicos e Dentistas",
    "rotuloMenu": "RC Médico e Dentista",
    "grupo": "Para sua empresa",
    "template": 2,
    "foto": "h-pessoas",
    "url": "/responsabilidade-civil-medico-e-dentista/",
    "resumo": "Defesa e indenização quando o paciente processa por erro no atendimento.",
    "promessa": "Cobre a indenização ao paciente e, o que costuma pesar mais, o custo de se defender — no processo judicial e também no processo ético do conselho.",
    "chips": [
      "Erro no atendimento",
      "Custas de defesa",
      "Processo ético"
    ],
    "gatilhoLegal": {
      "titulo": "Não é obrigatório, mas o processo não avisa",
      "descricao": "Nenhuma lei obriga médico ou dentista a ter a apólice. O que existe é o prazo: o paciente pode reclamar anos depois do atendimento, e a defesa começa antes de qualquer decisão sobre culpa. É esse intervalo que a apólice cobre."
    },
    "coberturas": [
      {
        "titulo": "Erro no atendimento",
        "descricao": "Dano ao paciente decorrente de diagnóstico, procedimento ou conduta no exercício da profissão."
      },
      {
        "titulo": "Custas de defesa",
        "descricao": "Advogado, perícia e custas — o gasto que aparece primeiro, com ou sem condenação no fim."
      },
      {
        "titulo": "Processo ético no conselho",
        "descricao": "Defesa em procedimento disciplinar no CRM ou no CRO, quando contratada."
      },
      {
        "titulo": "Danos morais e estéticos",
        "descricao": "Indenização por dano moral e estético reconhecido em juízo, dentro do limite contratado."
      },
      {
        "titulo": "Retroatividade",
        "descricao": "Alcança atendimento anterior à apólice, desde a data acordada."
      },
      {
        "titulo": "Equipe e clínica",
        "descricao": "Estende a cobertura a auxiliares e à pessoa jurídica da clínica, quando incluídas."
      }
    ],
    "exclusoes": [
      "Ato doloso, ou atendimento sob efeito de álcool e droga",
      "Procedimento fora da especialidade registrada no conselho",
      "Exercício sem registro ativo no CRM ou no CRO",
      "Procedimento experimental ou sem respaldo em protocolo reconhecido",
      "Obrigação de resultado estético, salvo cobertura específica contratada",
      "Reclamação já conhecida antes da contratação"
    ],
    "dadosParaCotar": [
      "Especialidade e número de registro no conselho",
      "Se atende em consultório próprio, clínica ou hospital",
      "Se realiza procedimento cirúrgico e de que porte",
      "Quantos profissionais entram na apólice",
      "Desde quando exerce — define a retroatividade",
      "Se há reclamação ou processo em andamento"
    ],
    "faq": [
      {
        "pergunta": "A apólice cobre processo no conselho, e não só na Justiça?",
        "resposta": "Cobre quando a garantia de processo ético e disciplinar está contratada. Não é padrão em toda apólice — é um dos itens que a MX compara entre as seguradoras."
      },
      {
        "pergunta": "Por quanto tempo posso ser processado por um atendimento?",
        "resposta": "O prazo varia conforme a natureza da ação e pode passar de cinco anos. Por isso a retroatividade e o prazo complementar pesam mais aqui do que em outros seguros."
      },
      {
        "pergunta": "Cirurgia estética entra?",
        "resposta": "Depende da apólice. Procedimento estético costuma ser tratado em condição separada, e obrigação de resultado geralmente é excluída. Precisa ser dito na cotação para não virar surpresa no sinistro."
      }
    ],
    "relacionados": [
      "responsabilidade-civil-profissional",
      "empresarial",
      "saude",
      "vida-em-grupo"
    ]
  }
} as const satisfies Record<string, Produto>;

export type Slug = keyof typeof PRODUTOS;

export const SLUGS = Object.keys(PRODUTOS) as Slug[];

export const GRUPOS: Grupo[] = ['Para você', 'Para sua empresa', 'Saúde e previdência'];

export function porGrupo(g: Grupo): Slug[] {
  return SLUGS.filter((s) => PRODUTOS[s].grupo === g)
    .sort((a, b) => PRODUTOS[a].rotuloMenu.localeCompare(PRODUTOS[b].rotuloMenu, 'pt-BR'));
}
