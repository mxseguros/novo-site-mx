import { ESPECIALISTAS, WHATSAPP, pendente } from '@/content/empresa';
import Dado from '@/components/Dado';

type Id = keyof typeof ESPECIALISTAS;

/**
 * Quem lidera cada pilar. É a prova concreta de "consultores que moram onde os
 * clientes moram": nome, foto e área, sem banco de imagem no lugar do rosto.
 * É caixa: sem hover.
 */
function Cartao({ id, largo }: { id: Id; largo: boolean }) {
  const e = ESPECIALISTAS[id];
  return (
    <div className={'card esp' + (largo ? ' esp--largo' : '')}>
      {pendente(e.foto) ? (
        <div className="foto-vazia esp__foto">
          <b>
            <Dado>{e.foto}</Dado>
          </b>
        </div>
      ) : (
        <div
          className="foto-larga esp__foto"
          style={{ backgroundImage: `url("${e.foto}")` }}
          role="img"
          aria-label={`Foto de ${e.nome}`}
        />
      )}
      <div className="pilha g8">
        <span className="esp__area">{e.area}</span>
        <h4>
          <Dado>{e.nome}</Dado>
        </h4>
        <p>{e.faz}</p>
        <p className="esp__onde">Atende Itapira, Águas de Lindóia e região</p>
        {largo && (
          <a className="btn btn--zap btn--peq esp__zap" href={WHATSAPP.link}>
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
              <use href="#i-zap" />
            </svg>{' '}
            Falar no WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

/** Os três, em grade. */
export default function Especialistas() {
  return (
    <div className="grade grade--3">
      {(Object.keys(ESPECIALISTAS) as Id[]).map((id) => (
        <Cartao id={id} largo={false} key={id} />
      ))}
    </div>
  );
}

/** Um só, ao lado do formulário da página de pilar. */
export function Especialista({ id }: { id: Id }) {
  return <Cartao id={id} largo />;
}
