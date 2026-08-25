'use client';

import { useId, useState, type InputHTMLAttributes } from 'react';

/**
 * Campo de formulário com máscara e erro.
 *
 * Duas decisões de comportamento:
 *
 * 1. O erro só aparece depois que a pessoa sai do campo, ou quando ela tenta
 *    enviar. Validar enquanto digita acusa "faltam dígitos" no primeiro
 *    número — é hostil e ninguém lê.
 * 2. Depois que o erro apareceu uma vez, ele passa a sumir enquanto a pessoa
 *    corrige, sem esperar sair do campo de novo. O sinal aparece tarde e
 *    some cedo.
 */

type Props = {
  rotulo: string;
  nome: string;
  /** Reescreve o que foi digitado. Recebe o valor bruto. */
  mascara?: (v: string) => string;
  /** Devolve a mensagem de erro, ou null quando está certo. */
  valida?: (v: string) => string | null;
  /** Força a exibição do erro — usado quando o envio é tentado. */
  mostrarErro?: boolean;
  /** Avisa o formulário se este campo está válido. */
  aoValidar?: (nome: string, erro: string | null) => void;
  dica?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'onChange'>;

export default function Campo({
  rotulo,
  nome,
  mascara,
  valida,
  mostrarErro = false,
  aoValidar,
  dica,
  ...resto
}: Props) {
  const id = useId();
  const [valor, setValor] = useState('');
  const [tocado, setTocado] = useState(false);

  const erro = valida ? valida(valor) : null;
  const visivel = erro && (tocado || mostrarErro);

  function mudou(bruto: string) {
    const novo = mascara ? mascara(bruto) : bruto;
    setValor(novo);
    aoValidar?.(nome, valida ? valida(novo) : null);
    // erro já mostrado some assim que o valor fica válido
    if (tocado && valida && !valida(novo)) setTocado(false);
  }

  return (
    <label className="campo" htmlFor={id}>
      <span>{rotulo}</span>
      <input
        {...resto}
        id={id}
        name={nome}
        value={valor}
        onChange={(e) => mudou(e.target.value)}
        onBlur={() => {
          setTocado(true);
          aoValidar?.(nome, valida ? valida(valor) : null);
        }}
        aria-invalid={visivel ? true : undefined}
        aria-describedby={visivel ? `${id}-erro` : dica ? `${id}-dica` : undefined}
      />
      {visivel ? (
        <span className="campo__erro" id={`${id}-erro`} role="alert">
          {erro}
        </span>
      ) : dica ? (
        <span className="campo__dica" id={`${id}-dica`}>
          {dica}
        </span>
      ) : null}
    </label>
  );
}
