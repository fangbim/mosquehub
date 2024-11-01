const withMDX = require('@next/mdx');

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
    images: {
      domains: ['img.icons8.com', 'images.unsplash.com'],
    },
}

module.exports = withMDX()(nextConfig)
