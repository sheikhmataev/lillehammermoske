/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/lillehammermoske' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lillehammermoske' : '',
}

module.exports = nextConfig
