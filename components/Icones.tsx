/**
 * Folha de ícones do site. Renderizada uma vez no layout; todo <use href="#i-x" />
 * na página aponta para cá. Nenhum ícone é reimportado por página.
 */
export default function Icones() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <g id="i-baixo"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></g>
        <g id="i-lupa"><circle cx="7.5" cy="7.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M11.6 11.6 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></g>
        <g id="i-fone"><path d="M4.2 2.5h3l1.2 3-1.6 1.3a10 10 0 0 0 4.4 4.4l1.3-1.6 3 1.2v3c0 .8-.7 1.5-1.5 1.4C7.6 14.6 3.4 10.4 2.8 4C2.7 3.2 3.4 2.5 4.2 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></g>
        <g id="i-zap"><path d="M3 17l1-3.6A7 7 0 1 1 6.6 16L3 17Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M7.4 7.2c.2 1.6 1.6 3.4 3.4 4.1.5.2 1 .1 1.3-.3l.4-.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></g>
        <g id="i-pin"><path d="M10 17.5s5.5-5 5.5-9.2A5.5 5.5 0 0 0 4.5 8.3C4.5 12.5 10 17.5 10 17.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="8.2" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.5" /></g>
        <g id="i-relogio"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M10 5.8V10l3 1.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g>
        <g id="i-mail"><rect x="2.5" y="4.5" width="15" height="11" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M3 5.5 10 11l7-5.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></g>
        <g id="i-instagram"><rect x="3" y="3" width="14" height="14" rx="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="10" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="14.1" cy="5.9" r="1" fill="currentColor" /></g>
        <g id="i-mais"><path d="M10 3v14M3 10h14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></g>
        <g id="i-alerta"><path d="M10 2.6 18.4 17H1.6L10 2.6Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 7.6v4.1M10 14.4h.01" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></g>
        <g id="i-carro"><path d="M2.5 12.5h15M4 12.5V9.2l1.7-3.6c.2-.5.7-.8 1.2-.8h6.2c.5 0 1 .3 1.2.8L16 9.2v3.3M4 12.5v2.2h2.4v-2.2M13.6 12.5v2.2H16v-2.2M4.4 9.4h11.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></g>
        <g id="i-casa"><path d="M3 9.2 10 3.5l7 5.7M4.8 10.6v6h10.4v-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></g>
        <g id="i-vida"><path d="M10 16.5S3 12.4 3 8.1a3.6 3.6 0 0 1 7-1.3 3.6 3.6 0 0 1 7 1.3c0 4.3-7 8.4-7 8.4Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></g>
        <g id="i-predio"><path d="M3.5 17V4.2c0-.4.3-.7.7-.7h7.1c.4 0 .7.3.7.7V17M12 8.5h4.1c.3 0 .6.3.6.6V17M2.5 17h15M6 6.5h1.5M6 9.5h1.5M6 12.5h1.5M9.5 6.5H11M9.5 9.5H11M9.5 12.5H11M14 11.5h1.2M14 14h1.2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></g>
        <g id="i-escudo"><path d="M10 2.8 16.2 5v5c0 3.7-2.6 6.4-6.2 7.4C6.4 16.4 3.8 13.7 3.8 10V5L10 2.8Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M7.4 10 9.3 12l3.4-3.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g>
        <g id="i-caminhao"><path d="M1.8 13.5V5.6h9.4v7.9M11.2 8h3l2.4 2.9v2.6M2 13.5h1.4M7.6 13.5h3.4M14.6 13.5h1.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="5.5" cy="14.4" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" /><circle cx="13" cy="14.4" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" /></g>
        <g id="i-planta"><path d="M10 17V8M10 8C10 5 7.8 2.8 4.6 2.8 4.6 6 6.8 8 10 8ZM10 10.5c0-2.6 2-4.6 4.9-4.6 0 2.9-2 4.6-4.9 4.6Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></g>
        <g id="i-imprimir"><path d="M5.5 7.5V3.2h9v4.3M5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-3.5A1.5 1.5 0 0 1 3.5 7.5h13A1.5 1.5 0 0 1 18 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-2M5.5 11.5h9v5.3h-9Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></g>
        <g id="i-baixar"><path d="M10 3v9M6.2 8.4 10 12.2l3.8-3.8M3.5 15.5h13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></g>
        <g id="i-seta"><path d="M3.5 10h12M11 5.5l4.5 4.5L11 14.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></g>
        <g id="i-etiqueta"><path d="M9.6 2.6H16a1.4 1.4 0 0 1 1.4 1.4v6.4l-7.2 7.2a1.4 1.4 0 0 1-2 0l-5.2-5.2a1.4 1.4 0 0 1 0-2l6.6-7.8Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="13.4" cy="6.6" r="1.2" fill="currentColor" /></g>
      </defs>
    </svg>
  );
}
