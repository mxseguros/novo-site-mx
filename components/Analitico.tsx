'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { rastrear } from '@/lib/rastrear';

const ID = process.env.NEXT_PUBLIC_GA4_ID;

/**
 * GA4 e o clique no WhatsApp. Sem ID configurado, nada carrega.
 *
 * O clique é escutado no documento porque há botão de WhatsApp em todo canto:
 * marcar um por um é como o evento some no primeiro botão novo. O envio de
 * formulário é disparado pelo próprio formulário, que sabe o pilar.
 */
export default function Analitico() {
  useEffect(() => {
    if (!ID) return;
    const clique = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="https://wa.me/"]');
      if (link) rastrear('clique_whatsapp', { numero: link.href.split('/').pop(), pagina: location.pathname });
    };
    document.addEventListener('click', clique);
    return () => document.removeEventListener('click', clique);
  }, []);

  if (!ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ID}`} />
      <Script id="ga4">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${ID}');`}
      </Script>
    </>
  );
}
