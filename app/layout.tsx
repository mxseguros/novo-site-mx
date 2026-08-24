import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

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
    "Corretora de seguros com escritório em Itapira e Águas de Lindóia desde 2002. " +
    "Uma cotação, dez seguradoras comparadas, e a MX junto no dia do sinistro.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MX Corretora de Seguros",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body>
        {/*
          .palco não é wrapper decorativo: é o container de onde pendem as 16
          container queries do design system. Sem ele — ou sem o
          container-name: palco no CSS — o site inteiro para de responder,
          e nada acusa o erro.
        */}
        <div className="palco">{children}</div>
      </body>
    </html>
  );
}
