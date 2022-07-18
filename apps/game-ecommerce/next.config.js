/** @type { import("next").NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'via.placeholder.com',
      'dummyimage.com'
    ]
  },
  experimental: {
    images: {
      allowFutureImage: true,
    }
  }
}

module.exports = nextConfig