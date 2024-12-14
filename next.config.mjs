/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
