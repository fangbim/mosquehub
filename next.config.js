/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/dzikir/:path*',
            destination: 'https://dzikir.zakiego.com/api/v0/dzikir-:path*', 
          },
        ];
      },
}

module.exports = nextConfig
