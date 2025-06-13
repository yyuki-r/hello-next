/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.roppoyoshi.com',
          },
        ],
        destination: 'https://roppoyoshi.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 