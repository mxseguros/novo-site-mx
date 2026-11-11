/**
 * Dados da corretora, em um lugar só: canais, unidades, especialistas, registros.
 *
 * Valor entre « » é dado que a MX ainda não confirmou. Nenhum deles aparece na
 * tela: enquanto está pendente, cada seção usa um texto que é verdadeiro sem o
 * dado (ou some), e o JSON-LD o deixa de fora. Para publicar o dado, basta
 * trocar aqui — a seção passa a usá-lo sozinha. Nenhum destes valores pode ser
 * inventado; `grep «` lista o que a MX ainda precisa mandar.
 */

export const pendente = (valor: string) => valor.includes('«');

export const CNPJ = '07.499.352/0001-82';
export const CEP_FILIAL = '13940-000';
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

export const WHATSAPP = { numero: '(19) 3863-8150', link: 'https://wa.me/551938638150' };
export const WHATSAPP_SINISTRO = { numero: '(19) 98203-6147', link: 'https://wa.me/5519982036147' };
export const EMAIL = 'mxseguros@mxseguros.com.br';
export const HORARIO = 'Segunda a sexta, 08:00 às 18:00';

/** Frase de prazo de retorno. Sem o SLA confirmado, não se promete prazo. */
export const RETORNO = pendente(SLA) ? 'Retorno em horário comercial' : `Retorno em ${SLA}, em dia útil`;

/** Com quem a MX intermedia consórcio. */
export const COM_ADMINISTRADORAS = pendente(ADMINISTRADORAS)
  ? 'administradoras autorizadas pelo Banco Central'
  : ADMINISTRADORAS;

/** A nota do Google só aparece com nota e total confirmados. */
export const GOOGLE_CONFIRMADO = !pendente(NOTA_GOOGLE) && !pendente(TOTAL_AVALIACOES);

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

/**
 * Nome e foto só vão para a tela juntos e confirmados. A seção "quem lidera cada
 * área" da home e da /a-mx só existe com os três; antes disso, a página de pilar
 * mostra a área sem rosto, e nenhum banco de imagem entra no lugar.
 */
export const especialistaConfirmado = (id: keyof typeof ESPECIALISTAS) =>
  !pendente(ESPECIALISTAS[id].nome) && !pendente(ESPECIALISTAS[id].foto);
export const ESPECIALISTAS_CONFIRMADOS = (Object.keys(ESPECIALISTAS) as (keyof typeof ESPECIALISTAS)[])
  .every(especialistaConfirmado);
