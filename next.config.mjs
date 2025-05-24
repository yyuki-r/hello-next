// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ビルド時の ESLint エラーを無視する
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;