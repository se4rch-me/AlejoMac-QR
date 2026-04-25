import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/AlejoMac-QR' : '',
  images: {
    unoptimized: true,
  },
  // Configurar WebSocket para HMR en desarrollo
  webpackDevMiddleware: (config) => {
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
