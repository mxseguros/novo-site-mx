import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Icones from "@/components/Icones";
import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";
import BarraMobile from "@/components/BarraMobile";
import Analitico from "@/components/Analitico";
import { CNPJ, EMAIL, UNIDADES, pendente } from "@/content/empresa";

/* DM Sans é a tipografia do design system — o "g" de andar único, escolhida
   por ser a família aberta mais próxima da referência visual aprovada.
   Entra como variável e alimenta o token --fonte do globals.css. */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mxseguros.com.br"),
  title: {
    default: "MX Corretora de Seguros — Itapira e Águas de Lindóia",
    template: "%s | MX Corretora de Seguros",
  },
  description:
    "Corretora em Itapira e Águas de Lindóia desde 2002: saúde para empresas, consórcio " +
    "e seguro empresarial, com a MX junto no dia do sinistro.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MX Corretora de Seguros",
  },
  twitter: { card: "summary_large_image" },
};

/* Dado pendente em content/empresa.ts fica fora daqui: token não vai para o Google. */
const preenchido = (valor: string) => (pendente(valor) ? undefined : valor);

const unidadeLd = (u: (typeof UNIDADES)[number]) => ({
  "@type": "PostalAddress",
  streetAddress: u.rua,
  addressLocality: u.cidade,
  addressRegion: u.uf,
  postalCode: preenchido(u.cep),
  addressCountry: "BR",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "MX Corretora de Seguros",
  url: "https://mxseguros.com.br",
  telephone: "+551938638150",
  email: EMAIL,
  taxID: preenchido(CNPJ),
  openingHours: "Mo-Fr 08:00-18:00",
  address: unidadeLd(UNIDADES[0]),
  department: {
    "@type": "InsuranceAgency",
    name: "MX Corretora de Seguros — Águas de Lindóia",
    address: unidadeLd(UNIDADES[1]),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Analitico />
        {/*
          .palco não é wrapper decorativo: é o container de onde pendem as 22
          container queries do design system. Sem ele — ou sem o
          container-name: palco no CSS — o site inteiro para de responder,
          e nada acusa o erro.
        */}
        <div className="palco">
          <Icones />
          <Topo />
          <main id="conteudo">{children}</main>
          <Rodape />
          <BarraMobile />
        </div>
      </body>
    </html>
  );
}
