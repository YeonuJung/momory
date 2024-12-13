/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cbxhntfxtfvfqfqqprof.supabase.co'
      }
    ]
  },
};

export default nextConfig;