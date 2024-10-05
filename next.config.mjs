/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['assets.aceternity.com','images.unsplash.com']
  },
  typescript:{
    ignoreBuildErrors:true,
  }
};

export default nextConfig;
