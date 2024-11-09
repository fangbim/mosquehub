const withMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/dzikir/:path*',
            destination: 'https://dzikir.zakiego.com/api/v0/dzikir-:path*', 
          },
          {
            source: '/:path*/:z/:y/:x',
            destination: process.env.MAPBOX_URL,
          }
        ];
      },
    images: {
      domains: ['img.icons8.com', 'images.unsplash.com'],
    },
}

module.exports = withMDX()(nextConfig)
