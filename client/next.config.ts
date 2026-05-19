/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://luxury-halt-trickster.ngrok-free.dev/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;