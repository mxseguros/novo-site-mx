import Link from 'next/link';

/**
 * Rodapé de todas as páginas. Carrega a declaração de corretora, o CNPJ e a
 * CNSP 382/2020 — exigências que não podem sumir de nenhuma tela.
 * O ano é calculado, nunca digitado (era o problema P11 do diagnóstico).
 */
export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="env">
        <div className="rodape__topo">
          <div className="pilha g16">
            <span className="logo logo--neg" role="img" aria-label="MX Corretora de Seguros"></span>
            <div className="pilha g12">
              <p className="rodape__linha"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg>
                <span><span className="rodape__rot">WhatsApp</span><a href="https://wa.me/551938638150"><b className="num">(19) 3863-8150</b></a></span></p>
              <p className="rodape__linha"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg>
                <span><span className="rodape__rot">WhatsApp comercial</span><a href="https://wa.me/5519971386794"><b className="num">(19) 97138-6794</b></a></span></p>
              <p className="rodape__linha"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-alerta" /></svg>
                <span><span className="rodape__rot">WhatsApp de sinistro</span><a href="https://wa.me/5519982036147"><b className="num">(19) 98203-6147</b></a></span></p>
              <p className="rodape__linha"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-mail" /></svg>
                <span><span className="rodape__rot">E-mail</span><a href="mailto:mxseguros@mxseguros.com.br">mxseguros@mxseguros.com.br</a></span></p>
            </div>
          </div>
    
          <div>
            <h4>Seguros</h4>
            <ul>
              <li><Link href="/seguros/automovel">Automóvel</Link></li>
              <li><Link href="/seguros/residencial">Residencial</Link></li>
              <li><Link href="/seguros/vida-individual">Vida</Link></li>
              <li><Link href="/seguros/condominio">Condomínio</Link></li>
              <li><Link href="/seguros/empresarial">Empresarial</Link></li>
              <li><Link href="/seguros/transportes">Frota e Transportes</Link></li>
              <li><Link href="/seguros"><b>Ver os 27 seguros</b></Link></li>
            </ul>
          </div>
    
          <div>
            <h4>A MX</h4>
            <ul>
              <li><Link href="/a-mx">Sobre nós</Link></li>
              <li><Link href="/sinistro">Sinistro</Link></li>
              <li><Link href="/sinistro">Assistência 24h</Link></li>
              <li><Link href="/contato">Contato</Link></li>
              <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
              <li><Link href="/cnsp-382-2020">Resolução CNSP 382/2020</Link></li>
            </ul>
          </div>
    
          <div className="pilha g20">
            <div>
              <h4>Unidades</h4>
              <ul>
                <li><span className="rodape__rot">Matriz</span>Av. Rio Branco, 221 — Centro<br />Itapira/SP · CEP 13970-070</li>
                <li style={{ marginTop: '.5rem' }}><span className="rodape__rot">Filial</span>Rua Argentina, 15, Salas 2 e 3 — Centro<br />Águas de Lindóia/SP</li>
              </ul>
            </div>
            <div>
              <h4>Horário</h4>
              <p>Segunda a sexta, 08:00 às 18:00</p>
            </div>
            <div>
              <h4>Redes</h4>
              <p><a href="https://instagram.com/mxsegurositapira">@mxsegurositapira</a> — Instagram e Facebook</p>
            </div>
          </div>
        </div>
    
        <p className="rodape__legal">
          MX Corretora de Seguros · CNPJ 45.154.654/0001-08.
        </p>
    
        <div className="rodape__base">
          <span>© {new Date().getFullYear()} MX Corretora de Seguros. Todos os direitos reservados.</span>
          <Link href="/politica-de-privacidade">Privacidade</Link>
          <Link href="/cnsp-382-2020">CNSP 382/2020</Link>
          <Link href="/politica-de-privacidade">LGPD</Link>
        </div>
      </div></footer>
  );
}
