'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { rastrear } from '@/lib/rastrear';

const ID = process.env.NEXT_PUBLIC_GA4_ID;
const CHAVE = 'mx-cookies';
/** Disparado pelo botão da Política de Privacidade para refazer a escolha. */
export const EVENTO_REVER = 'mx-cookies-rever';

type Escolha = 'aceito' | 'recusado' | null;

function lerEscolha(): Escolha {
  try {
    const v = localStorage.getItem(CHAVE);
    return v === 'aceito' || v === 'recusado' ? v : null;
  } catch {
    return null;
  }
}

/**
 * GA4, só com consentimento. O site não usa outro cookie que não seja
 * essencial: sem NEXT_PUBLIC_GA4_ID, não há aviso nem script.
 *
 * O clique no WhatsApp é escutado no documento porque há botão de WhatsApp em
 * todo canto: marcar um por um é como o evento some no primeiro botão novo. O
 * envio de formulário é disparado pelo próprio formulário, que sabe o assunto.
 */
export default function Analitico() {
  // undefined = ainda não leu (servidor e primeiro render): não mostra nada
  const [escolha, setEscolha] = useState<Escolha | undefined>(undefined);

  useEffect(() => {
    if (!ID) return;
    // localStorage só existe no navegador, por isso a leitura fica aqui
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEscolha(lerEscolha());
    const rever = () => setEscolha(null);
    window.addEventListener(EVENTO_REVER, rever);
    return () => window.removeEventListener(EVENTO_REVER, rever);
  }, []);

  useEffect(() => {
    if (!ID || escolha !== 'aceito') return;
    const clique = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="https://wa.me/"]');
      if (link) rastrear('clique_whatsapp', { numero: link.pathname.slice(1), pagina: location.pathname });
    };
    document.addEventListener('click', clique);
    return () => document.removeEventListener('click', clique);
  }, [escolha]);

  if (!ID) return null;

  function decidir(valor: 'aceito' | 'recusado') {
    try {
      localStorage.setItem(CHAVE, valor);
    } catch {
      /* sem armazenamento, a escolha vale só para esta visita */
    }
    // recusou depois de ter aceitado: o GA já carregado para de coletar
    if (valor === 'recusado') (window as unknown as Record<string, boolean>)[`ga-disable-${ID}`] = true;
    setEscolha(valor);
  }

  return (
    <>
      {escolha === 'aceito' && (
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
      )}

      {escolha === null && (
        <div className="aviso-cookies" role="region" aria-label="Aviso de cookies">
          <p>
            Usamos cookies de medição (Google Analytics) para entender como o site é usado. Eles só
            são ativados se você aceitar.{' '}
            <Link href="/politica-de-privacidade#cookies">Saiba mais</Link>.
          </p>
          <div className="acoes">
            <button type="button" className="btn btn--linha btn--peq" onClick={() => decidir('recusado')}>
              Recusar
            </button>
            <button type="button" className="btn btn--linha btn--peq" onClick={() => decidir('aceito')}>
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Botão da Política de Privacidade: apaga a escolha e reabre o aviso. */
export function ReverCookies() {
  if (!ID) return null;
  return (
    <button
      type="button"
      className="btn btn--linha btn--peq"
      onClick={() => {
        try {
          localStorage.removeItem(CHAVE);
        } catch {
          /* nada a apagar */
        }
        window.dispatchEvent(new Event(EVENTO_REVER));
      }}
    >
      Rever minha escolha de cookies
    </button>
  );
}
