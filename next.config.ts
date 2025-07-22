import type { NextConfig } from 'next';
import nextTranslate from 'next-translate-plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ⚙️ Zapínáš a konfiguruješ Turbopack zde:
  turbopack: {
    // Např. alias pro importy
    resolveAlias: {
      underscore: 'lodash',
    },
    // Nebo přidání loaderů (např. pro SVG/MDX)
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    // Můžeš přidat i tree-shaking, memoryLimit, atp.
  },

  async redirects() {
    return [
      { source: '/harboroffice', destination: '/items/harboroffice', permanent: false },
      { source: '/guildhouse', destination: '/items/guildhouse', permanent: false },
      { source: '/townhall', destination: '/items/townhall', permanent: false },
    ];
  },
};

export default nextTranslate(nextConfig);
