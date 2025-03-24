/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disables the Image Optimization API
  },
}

module.exports = nextConfig
