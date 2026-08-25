/**
 * Mapa de uma unidade, embutido do Google Maps.
 *
 * No protótipo isto era imagem estática do OpenStreetMap, porque o
 * visualizador de artifact bloqueia iframe de host externo. No site não há
 * essa restrição, então vale o mapa de verdade: o visitante arrasta, dá zoom
 * e reconhece a rua.
 *
 * Carrega tardio — são dois iframes no fim de uma página longa, e não devem
 * disputar banda com o hero.
 */
type Props = {
  /** Endereço completo, como seria digitado na busca do Google Maps. */
  endereco: string;
  /** Descrição para quem usa leitor de tela. */
  descricao: string;
};

export default function MapaUnidade({ endereco, descricao }: Props) {
  const busca = encodeURIComponent(endereco);
  return (
    <iframe
      className="unidade__mapa"
      title={descricao}
      src={`https://www.google.com/maps?q=${busca}&z=16&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
