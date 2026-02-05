/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_PUBLIC_EXPORT === 'true';

const nextConfig = {
  // Only use export mode when explicitly requested
  ...(isExport && { output: 'export' }),
  
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // No basePath needed - using custom domain lillehammermoske.no
}

module.exports = nextConfig