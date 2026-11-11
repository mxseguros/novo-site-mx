import type { NextConfig } from "next";
import { SLUGS } from "./content/produtos";
import { REDIRECIONAMENTOS } from "./content/redirecionamentos";

const nextConfig: NextConfig = {
  /**
   * URLs do site antigo (WordPress). Produto morava na raiz — /automovel/ — e
   * agora mora em /seguros/automovel, com o mesmo slug. As demais estão em
   * content/redirecionamentos.ts. Todas permanentes (308, que o Google trata
   * como 301): nenhuma URL antiga vira 404.
   */
  async redirects() {
    return [
      ...SLUGS.map((slug) => ({ source: `/${slug}`, destination: `/seguros/${slug}`, permanent: true })),
      ...REDIRECIONAMENTOS.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
};

export default nextConfig;
