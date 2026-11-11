import { WHATSAPP } from './empresa';

/**
 * Páginas do site antigo que não têm o mesmo endereço no site novo, tiradas do
 * wp-sitemap de mxseguros.com.br em 11/11/2026. Os produtos (/automovel/ e os
 * demais) são redirecionados à parte, a partir de SLUGS, em next.config.ts.
 *
 * As que mantêm o endereço — /, /contato, /sinistro, /politica-de-privacidade —
 * não entram aqui. Antes da virada de DNS, conferir uma a uma.
 */
export const REDIRECIONAMENTOS: [antigo: string, novo: string][] = [
  // institucionais
  ['/sobre-nos', '/a-mx'],
  ['/assistencia', '/sinistro'],
  ['/resolucao-cnsp-382-2020', '/cnsp-382-2020'],
  ['/seguros-online', '/seguros'],
  ['/consorcios', '/consorcio'],

  // produto com outro slug ou que virou pilar
  ['/saude-para-pets', '/seguros/pets'],
  ['/seguro-de-vida-norden', '/saude-empresarial'],
  ['/franquia', '/seguro-empresarial'],
  ['/negocios-publicos', '/seguros/garantia'],
  ['/financiamentos', '/consorcio'],
  ['/carro-facil', '/seguros/automovel'],

  // páginas de campanha e da bio do Instagram
  ['/seguro-empresarial-mx-seguros', '/seguro-empresarial'],
  ['/seguro-de-vida-mx-seguros-2026', '/seguros/vida-individual'],
  ['/link-da-bio-mxseguros', '/'],
  ['/wpp-mx-seguros', WHATSAPP.link],
];
