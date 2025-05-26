// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ビルド時の ESLint エラーを無視する
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 画像最適化の設定
  images: {
    domains: ['images.microcms-assets.io'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // セキュリティヘッダーの設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // パフォーマンス最適化の設定
  poweredByHeader: false,
  compress: true,
  
  // ビルド出力の設定
  output: 'standalone',
};

export default nextConfig;