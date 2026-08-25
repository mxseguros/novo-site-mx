import Link from 'next/link';

/**
 * Barra fixa no rodapé do celular. Abaixo de 940px a nav e os botões do header
 * somem, e é ela que sustenta os três caminhos: cotar, conversar e socorro.
 * Não confundir com barra sticky de conversão dentro da página de produto —
 * essa foi recusada pelo cliente e não deve voltar.
 */
export default function BarraMobile() {
  return (
    <div className="barra-mobile">
      <Link className="btn btn--azul" href="/#cotar">
        Fazer cotação
      </Link>
      <a className="btn btn--zap" href="https://wa.me/551938638150">
        WhatsApp
      </a>
      <Link className="btn btn--socorro" href="/sinistro">
        Sinistro
      </Link>
    </div>
  );
}
