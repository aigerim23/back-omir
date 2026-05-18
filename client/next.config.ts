/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Когда фронтенд запрашивает /api/posts или /api/login
        source: '/api/:path*',
        // Он перенаправит на http://localhost:5000/posts или http://localhost:5000/login
        destination: 'http://localhost:5000/:path*', 
      },
    ];
  },
};

module.exports = nextConfig;
