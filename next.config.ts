import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_CDN_URL || undefined,
  output: 'standalone',
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  productionBrowserSourceMaps: process.env.GENERATE_SOURCEMAP === 'true',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? false : true
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
  scope: '/app',
  sw: 'service-worker.js',
  disable: process.env.NEXT_PUBLIC_NODE_ENV === 'development',

});


module.exports = withPWA(nextConfig);
