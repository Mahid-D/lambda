/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: { appDir: true },
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] }
};
export default nextConfig;
