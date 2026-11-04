/**
 * Evento para o GA4. Sem NEXT_PUBLIC_GA4_ID o gtag não existe e isto não faz nada.
 */
declare global {
  interface Window {
    gtag?: (comando: 'event', evento: string, dados?: Record<string, string | undefined>) => void;
  }
}

export function rastrear(evento: string, dados?: Record<string, string | undefined>) {
  window.gtag?.('event', evento, dados);
}
