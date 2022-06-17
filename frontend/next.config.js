/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://cutt.ly/api/:path*",
      },
    ];
  },
};
