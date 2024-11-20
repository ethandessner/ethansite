import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for GitHub Pages
  basePath: '/ethansite', // Replace with your GitHub repository name
  assetPrefix: '/ethansite/', 
};

export default nextConfig;
