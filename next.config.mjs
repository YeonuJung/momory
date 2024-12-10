/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cbxhntfxtfvfqfqqprof.supabase.co"],
  },
  bodyParser: {
    sizeLimit: "10mb",
  }
};

export default nextConfig;
