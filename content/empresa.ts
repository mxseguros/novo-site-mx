/**
 * Dados da corretora, em um lugar só: canais, unidades, especialistas, registros.
 *
 * Valor entre « » é dado que a MX ainda não confirmou. O componente Dado mostra
 * esse valor como token na tela, e o JSON-LD o deixa de fora. Para preencher,
 * basta trocar aqui. Antes da virada de DNS, `grep «` no código precisa voltar
 * vazio — nenhum destes valores pode ser inventado.
 */

/** Trava a publicação. */
export const SUSEP = '«SUSEP»';
/** O site mostrava 07.499.352/0001-82 e o protótipo v2 registrou 45.154.654/0001-08. */
export const CNPJ = '«CNPJ»';
/** Os Correios dão 13940-172 para a Rua Argentina, mas no Jardim São Francisco. */
export const CEP_FILIAL = '«CEP-FILIAL»';
/** Só o prazo que o time cumpre, como "até 1 hora útil". */
export const SLA = '«SLA»';
/** Sem isso, e sem revisão jurídica, o texto de consórcio não vai ao ar. */
export const ADMINISTRADORAS = '«ADMINISTRADORAS»';

/** Prova social e prova por pilar. */
export const NOTA_GOOGLE = '«NOTA-GOOGLE»';
export const TOTAL_AVALIACOES = '«TOTAL-AVALIAÇÕES»';
export const VIDAS_ADMINISTRADAS = '«VIDAS-ADMINISTRADAS»';
export const CASE_SAUDE = '«CASE-SAÚDE»';
export const CARTAS_CONTEMPLADAS = '«CARTAS-CONTEMPLADAS»';
export const NUM_ADMINISTRADORAS = '«Nº-ADMINISTRADORAS»';
export const CASOS_SINISTRO = '«CASOS-SINISTRO»';

/** Um dos três testados no protótipo v3. A escolha final é do marketing. */
export const LEMA = 'MX. Junto no seu negócio.';

export const WHATSAPP = { numero: '(19) 3863-8150', link: 'https://wa.me/551938638150' };
export const WHATSAPP_SINISTRO = { numero: '(19) 98203-6147', link: 'https://wa.me/5519982036147' };
export const EMAIL = 'mxseguros@mxseguros.com.br';
export const HORARIO = 'Segunda a sexta, 08:00 às 18:00';

export const pendente = (valor: string) => valor.includes('«');

export const UNIDADES = [
  {
    selo: 'Matriz',
    cidade: 'Itapira',
    uf: 'SP',
    rua: 'Av. Rio Branco, 221',
    bairro: 'Centro',
    cep: '13970-070',
    busca: 'Av. Rio Branco, 221 - Centro, Itapira - SP, 13970-070',
  },
  {
    selo: 'Filial',
    cidade: 'Águas de Lindóia',
    uf: 'SP',
    rua: 'Rua Argentina, 15, Salas 2 e 3',
    bairro: 'Centro',
    cep: CEP_FILIAL,
    busca: 'Rua Argentina, 15 - Águas de Lindóia - SP',
  },
];

export const ESPECIALISTAS = {
  saude: {
    area: 'Saúde empresarial',
    nome: '«NOME-SAÚDE»',
    foto: '«FOTO-SAÚDE»',
    faz: 'Planos de saúde e odontológicos por empresa, vida em grupo e renovação de contrato.',
  },
  financeiras: {
    area: 'Consórcio',
    nome: '«NOME-CONSÓRCIO»',
    foto: '«FOTO-CONSÓRCIO»',
    faz: 'Consórcio de imóvel, veículo e serviços, da simulação à contemplação.',
  },
  empresarial: {
    area: 'Seguro empresarial',
    nome: '«NOME-EMPRESARIAL»',
    foto: '«FOTO-EMPRESARIAL»',
    faz: 'Empresa, condomínio, frota, transportes, agro e responsabilidade civil.',
  },
};
