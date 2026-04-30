import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/GilbertoScript/backtoblack/**',
      },
      {
        protocol: 'https',
        hostname: 'app.trickle.so',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
