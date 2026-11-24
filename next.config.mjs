/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ["codesark.me", "www.codesark.me", "www.savinaykumar.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host.replaceAll(".", "\\.") }],
      destination: "https://savinaykumar.com/:path*",
      permanent: true,
    }));
  },
  reactStrictMode: true,
  output: "standalone",
};

export default nextConfig;
