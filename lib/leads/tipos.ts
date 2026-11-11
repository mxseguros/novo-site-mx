/**
 * Contrato do lead entre os formulários e o /api/lead. Usado nos dois lados:
 * o navegador monta, o servidor valida de novo — nada que vem do navegador é
 * confiável só porque passou pela validação do formulário.
 */

export const TIPOS_DE_LEAD = ['cotacao', 'contato', 'cnsp'] as const;
export type TipoDeLead = (typeof TIPOS_DE_LEAD)[number];

export interface PedidoDeLead {
  tipo: TipoDeLead;
  /** O que a pessoa pediu, em texto: "Plano de saúde empresarial", "Seguro Moto"… */
  assunto: string;
  nome: string;
  fone: string;
  /** Os demais campos, já com o rótulo que a pessoa viu na tela. */
  campos: [rotulo: string, valor: string][];
  pagina: string;
  consentimento: boolean;
  /** Honeypot: campo invisível. Pessoa não preenche; robô preenche. */
  site?: string;
}

export interface RespostaDeLead {
  ok: boolean;
  protocolo?: string;
  /** Mensagem para a pessoa, quando ok é false. */
  erro?: string;
}
