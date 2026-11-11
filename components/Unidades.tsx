import { HORARIO, UNIDADES, WHATSAPP, WHATSAPP_SINISTRO } from '@/content/empresa';
import MapaUnidade from '@/components/MapaUnidade';

/**
 * As duas unidades, com mapa e os dois canais. Home, /a-mx e /contato usam este
 * mesmo bloco: endereço repetido à mão foi como o CEP pendente e o WhatsApp
 * duplicado se espalharam.
 */
export default function Unidades() {
  return (
    <div className="grade grade--2">
      {UNIDADES.map((u) => (
        <div className="unidade" key={u.cidade}>
          <MapaUnidade endereco={u.busca} descricao={`Mapa da unidade da MX em ${u.cidade}`} />
          <div className="unidade__corpo">
            <span className="selo">{u.selo}</span>
            <h3>
              {u.cidade} / {u.uf}
            </h3>
            <div className="dados">
              <p className="dados__item">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-pin" />
                </svg>
                <span>
                  {u.rua} — {u.bairro}
                  <br />
                  {u.cidade}/{u.uf} · CEP {u.cep}
                </span>
              </p>
              <p className="dados__item">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-relogio" />
                </svg>
                <span>{HORARIO}</span>
              </p>
              <p className="dados__item">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-zap" />
                </svg>
                <span>
                  <span className="dados__rot">WhatsApp · cotação, apólice, boleto e dúvidas</span>
                  <a href={WHATSAPP.link} className="num">
                    {WHATSAPP.numero}
                  </a>
                </span>
              </p>
              <p className="dados__item">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#i-alerta" />
                </svg>
                <span>
                  <span className="dados__rot">WhatsApp · só sinistro</span>
                  <a href={WHATSAPP_SINISTRO.link} className="num">
                    {WHATSAPP_SINISTRO.numero}
                  </a>
                </span>
              </p>
            </div>
            <a
              className="seta"
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(u.busca)}`}
              target="_blank"
              rel="noopener"
            >
              Como chegar a {u.cidade}{' '}
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <use href="#i-seta" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
