import type { Metadata } from 'next';
import PaginaPilar from '@/components/PaginaPilar';
import { CONTEUDO } from '@/content/pilares';

const { meta } = CONTEUDO.financeiras;

export const metadata: Metadata = { title: meta.titulo, description: meta.descricao };

export default function Pagina() {
  return <PaginaPilar id="financeiras" />;
}
