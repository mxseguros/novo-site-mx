# Site da MX Corretora de Seguros

Redesign completo de [mxseguros.com.br](https://mxseguros.com.br), saindo de WordPress + Elementor
para Next.js. Corretora de Itapira e Águas de Lindóia, no mercado desde 2002, com mais de 40
seguradoras parceiras.

**Status:** site completo em ambiente de teste, com a arquitetura por pilares do protótipo v3.
Nenhuma seção mostra dado pendente. Antes da virada de DNS: configurar o envio de e-mail do
`/api/lead` (`.env.example`), revisão jurídica da Política de Privacidade e conferir os
redirecionamentos de `content/redirecionamentos.ts`.

---

## Como rodar

```bash
npm install
npm run dev
```

`npm run build` para o build de produção, `npm run lint` e `npx tsc --noEmit` para as verificações.
As variáveis de ambiente estão descritas em `.env.example`.

---

## Estrutura

```
app/
  globals.css        design system inteiro, portado do protótipo
  layout.tsx         casca, metadados, JSON-LD e GA4
  saude-empresarial/, consorcio/, seguro-empresarial/   páginas de pilar
  para-voce/, guias/, seguros/, a-mx/, sinistro/, contato/
content/
  produtos.ts        todos os produtos, tipados. Fonte única de conteúdo
  pilares.ts         os três pilares e "Para você": menu, chamadas e páginas
  empresa.ts         canais, unidades, especialistas e dados pendentes «…»
  redirecionamentos.ts  URLs do site antigo que mudaram de endereço
lib/leads/           contrato do lead e o sink (hoje: e-mail via Resend)
public/
  fotos/             45 imagens WebP (headers de produto, cards, mapas)
  mx-logo.webp       logo em WebP lossless, usado via mask-image
```

---

## Convenções que não são óbvias

### 1. Sem Tailwind, e é de propósito

O CSS em `app/globals.css` é o design system aprovado no Portão G2, com tokens, escala tipográfica
e componentes já ajustados. Reescrever em classes utilitárias jogaria fora esse ajuste. Estilo novo
entra como regra no design system, não como utilitária solta.

### 2. `.palco` sustenta o responsivo inteiro

O site tem **22 `@container palco` e uma única `@media`**. Todo o comportamento responsivo pende de
um elemento com:

```css
container-type: inline-size;
container-name: palco;
```

Remover o `.palco` do layout, ou só o `container-name`, faz o site inteiro parar de responder — e
isso não aparece como erro em lugar nenhum. É a armadilha número um deste repositório.

### 3. `content/produtos.ts` é a fonte única

Os produtos vivem em um objeto tipado. O menu, o índice, as páginas de pilar e a rota de produto
leem dele. **Nenhum destino de produto é escrito à mão** — foi assim que o site antigo acumulou link
quebrado. **A quantidade também não**: ela sai de `SLUGS.length`, porque o site chegou a dizer "27"
com 32 produtos na lista.

A interface `Produto` é validada em tempo de compilação por `satisfies`, então campo faltando
quebra o build em vez de sumir da página.

| Template | Uso | Quantos |
|---|---|---|
| T1 | Produto de massa | 12 |
| T2 | Técnico, B2B e consórcio | 17 |
| T4 | Benefício (saúde, odonto, previdência) | 3 |

Não existe T3. As páginas de consórcio saíram do site em 21/08/2026, porque a MX não representava
nenhuma administradora, e voltaram depois. Com o consórcio virando pilar, o texto só vai ao ar com
`ADMINISTRADORAS` preenchido em `content/empresa.ts` e revisão jurídica.

### 4. A marca se organiza em pilares

Saúde para empresas, Linhas financeiras e Seguro empresarial, com "Para você" como porta de entrada.
`content/pilares.ts` define o menu, a chamada de cada pilar e as páginas. O herói da home é um slider de
três destaques, e o formulário (`components/FormPilar.tsx`) pede dados diferentes por pilar.

### 5. Valor entre « » é dado pendente

`content/empresa.ts` guarda o que a MX ainda não confirmou. Valor pendente nunca vai para a tela:
cada seção tem uma versão verdadeira sem o dado e passa a usá-lo sozinha quando ele é preenchido —
o prazo de retorno vira "em horário comercial", a nota do Google some do título, os números de prova
pendentes dão lugar aos confirmados, e a seção "quem lidera cada área" só aparece com nome e foto
dos três especialistas. O JSON-LD também deixa o pendente de fora. `grep «` lista o que a MX ainda
precisa mandar.

### 6. Formulários e cookies

Todo formulário envia ao `/api/lead`, que valida de novo, descarta robô (honeypot), limita envio por
IP e devolve protocolo. A entrega fica em `lib/leads/sink.ts`. Se o envio falhar ou não estiver
configurado, o formulário mostra o botão de WhatsApp com a mensagem já escrita — nunca finge que
enviou. O GA4 só carrega com `NEXT_PUBLIC_GA4_ID` definido **e** depois que a pessoa aceita o aviso
de cookies.

---

## Conformidade

A MX é **corretora**: não assume risco e não administra plano. Todo texto de produto precisa
respeitar isso.

- Consórcio nunca é investimento e nunca promete prazo de contemplação
- Previdência sem projeção de rentabilidade
- Em saúde, a MX é corretora e não administradora de benefícios — nada de prometer movimentação
  cadastral
- CNPJ e a Resolução CNSP 382/2020 ficam visíveis no rodapé

---

## Migração

Os slugs de produto do site antigo são preservados, mas o produto saiu da raiz: `/automovel/` vira
`/seguros/automovel`, por redirecionamento gerado de `SLUGS` em `next.config.ts`. As demais URLs do
site antigo que mudaram estão em `content/redirecionamentos.ts`. Todos são permanentes (308).
