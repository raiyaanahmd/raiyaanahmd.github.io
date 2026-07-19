/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (username.github.io — no basePath needed).
  output: "export",
  trailingSlash: true,
  images: {
    // No server at runtime — images are pre-sized at build time instead.
    unoptimized: true,
  },
};

export default nextConfig;
