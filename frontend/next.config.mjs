/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Provide your environment variables here
     //API_BASE_URL: "https://api.beyondcompetitions.com",
     API_BASE_URL: 'http://localhost:5000',
  },
};

export default nextConfig;
