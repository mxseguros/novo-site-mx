import { ESPECIALISTAS, WHATSAPP, especialistaConfirmado } from '@/content/empresa';

type Id = keyof typeof ESPECIALISTAS;

const ICONE: Record<Id, string> = {
  saude: 'i-vida',
  financeiras: 'i-predio',
  empresarial: 'i-escudo',
};

/**
 * Quem lidera cada pilar. É a prova concreta de "consultores que moram onde os
 * clientes moram": nome, foto e área, sem banco de imagem no lugar do rosto.
 * Enquanto nome e foto não estão confirmados em content/empresa.ts, o cartão
 * mostra a área, sem rosto e sem nome. É caixa: sem hover.
 */
function Cartao({ id, largo }: { id: Id; largo: boolean }) {
  const e = ESPECIALISTAS[id];
  const confirmado = especialistaConfirmado(id);

  return (
    <div className={'card esp' + (largo ? ' esp--largo' : '') + (confirmado ? '' : ' esp--sem-foto')}>
      {confirmado ? (
        <div
          className="foto-larga esp__foto"
          style={{ backgroundImage: `url("${e.foto}")` }}
          role="img"
          aria-label={`Foto de ${e.nome}`}
        />
      ) : (
        <span className="card__icone">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <use href={`#${ICONE[id]}`} />
          </svg>
        </span>
      )}
      <div className="pilha g8">
        <span className="esp__area">{e.area}</span>
        <h4>{confirmado ? e.nome : `Equipe de ${e.area.toLowerCase()}`}</h4>
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

/**
 * Os três, em grade. Só é usado com ESPECIALISTAS_CONFIRMADOS: sem nome e foto,
 * a grade repetiria a seção de pilares.
 */
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
