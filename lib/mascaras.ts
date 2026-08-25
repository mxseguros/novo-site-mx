/**
 * Máscaras e validação dos formulários de cotação.
 *
 * Funções puras, sem dependência: recebem o que a pessoa digitou e devolvem
 * o texto formatado. A máscara nunca rejeita tecla — ela reescreve o valor.
 * Bloquear tecla quebra colar, autopreenchimento e teclado de celular.
 */

const digitos = (v: string) => v.replace(/\D/g, '');

/**
 * Telefone brasileiro: (19) 99999-9999 para celular, (19) 9999-9999 para fixo.
 * Formata progressivamente, para o campo não ficar estranho durante a digitação.
 */
export function mascaraTelefone(valor: string): string {
  let d = digitos(valor);
  // Quem copia do WhatsApp cola "+55 19 3863-8150". Sem tirar o código do
  // país, o 55 vira DDD e o número inteiro sai deslocado.
  if (d.length > 11 && d.startsWith('55')) d = d.slice(2);
  d = d.slice(0, 11);
  if (d.length <= 2) return d;
  const ddd = `(${d.slice(0, 2)})`;
  if (d.length <= 6) return `${ddd} ${d.slice(2)}`;
  // com 11 dígitos o corte é depois do quinto; com 10, depois do quarto
  const corte = d.length > 10 ? 7 : 6;
  return `${ddd} ${d.slice(2, corte)}-${d.slice(corte)}`;
}

/**
 * Vencimento da apólice: mês/ano, como MM/AAAA.
 * O ano fica com quatro dígitos porque apólice vence anos à frente e "26"
 * é ambíguo para quem lê depois.
 */
export function mascaraMesAno(valor: string): string {
  const d = digitos(valor).slice(0, 6);
  if (d.length <= 2) return d;
  return `${d.slice(0, 2)}/${d.slice(2)}`;
}

/** Só dígitos, para o campo de quantidade de vidas. */
export function mascaraInteiro(valor: string, max = 4): string {
  return digitos(valor).slice(0, max).replace(/^0+(?=\d)/, '');
}

/**
 * Idades separadas por vírgula: "38, 35, 6".
 * Aceita o que a pessoa digita e só normaliza a pontuação.
 */
export function mascaraIdades(valor: string): string {
  return valor
    .replace(/[^\d,\s]/g, '')
    .replace(/\s*,\s*/g, ', ')
    .replace(/\s{2,}/g, ' ')
    .slice(0, 60);
}

/* ==========================================================================
   Validação — devolve a mensagem de erro, ou null quando está certo.
   A mensagem diz o que fazer, não só que está errado.
   ========================================================================== */

const DDD_VALIDOS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95,
  96, 97, 98, 99,
]);

export function validaTelefone(valor: string): string | null {
  const d = digitos(valor);
  if (!d) return 'Informe um WhatsApp com DDD.';
  if (d.length < 10) return 'Faltam dígitos. Use DDD + número, como (19) 98765-4321.';
  if (d.length > 11) return 'Número longo demais. Confira o DDD e o número.';
  if (!DDD_VALIDOS.has(Number(d.slice(0, 2)))) return 'Esse DDD não existe. Confira os dois primeiros dígitos.';
  // Celular no Brasil tem 11 dígitos e começa com 9 depois do DDD.
  if (d.length === 11 && d[2] !== '9') return 'Celular começa com 9 depois do DDD.';
  if (/^(\d)\1+$/.test(d.slice(2))) return 'Esse número não parece válido.';
  return null;
}

export function validaNome(valor: string): string | null {
  const limpo = valor.trim();
  if (!limpo) return 'Informe seu nome.';
  if (limpo.length < 2) return 'Nome muito curto.';
  if (/\d/.test(limpo)) return 'Nome não leva número.';
  return null;
}

export function validaMesAno(valor: string): string | null {
  const limpo = valor.trim();
  if (!limpo) return null; // opcional
  const m = /^(\d{2})\/(\d{4})$/.exec(limpo);
  if (!m) return 'Use mês/ano, como 03/2027.';
  const mes = Number(m[1]);
  const ano = Number(m[2]);
  if (mes < 1 || mes > 12) return 'Mês precisa ficar entre 01 e 12.';
  const atual = new Date().getFullYear();
  if (ano < atual - 1 || ano > atual + 10) return `Ano fora do esperado — use algo entre ${atual} e ${atual + 10}.`;
  return null;
}

export function validaVidas(valor: string): string | null {
  if (!valor.trim()) return null; // opcional
  const n = Number(valor);
  if (!Number.isInteger(n) || n < 1) return 'Informe pelo menos uma vida.';
  if (n > 9999) return 'Para carteiras desse tamanho, fale direto com um corretor.';
  return null;
}

export function validaObrigatorio(valor: string, campo: string): string | null {
  return valor.trim() ? null : `Informe ${campo}.`;
}
