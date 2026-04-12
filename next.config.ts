import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/1r1ch-portfolio" : "",
  assetPrefix: isProd ? "/1r1ch-portfolio/" : "",
};

export default nextConfig;
