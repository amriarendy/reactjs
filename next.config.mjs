/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://127.0.0.1:3000",
    DB_URI: "mongodb://localhost:27017/nextapp",
  },
};

// module.exports = nextConfig;
export default nextConfig;
