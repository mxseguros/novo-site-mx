import type { MetadataRoute } from 'next';
import { SLUGS } from '@/content/produtos';
import { PILARES } from '@/content/pilares';

const BASE = 'https://mxseguros.com.br';

/** Todas as rotas públicas. Produto e pilar saem do conteúdo, nunca digitados. */
export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    '/',
    ...PILARES.map((p) => p.rota),
    '/seguros',
    ...SLUGS.map((s) => `/seguros/${s}`),
    '/guias',
    '/sinistro',
    '/a-mx',
    '/contato',
    '/trabalhe-conosco',
    '/cnsp-382-2020',
    '/politica-de-privacidade',
  ];
  return rotas.map((rota) => ({ url: `${BASE}${rota === '/' ? '' : rota}` }));
}
