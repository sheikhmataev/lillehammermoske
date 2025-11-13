/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const isExport = process.env.NEXT_PUBLIC_EXPORT === 'true';

const nextConfig = {
  // Only use export mode when explicitly requested
  ...(isExport && { output: 'export' }),
  
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  
  // Only use basePath and assetPrefix for production/deployment
  ...(!isDev && {
    basePath: '/lillehammermoske',
    assetPrefix: '/lillehammermoske',
  }),
}

module.exports = nextConfig