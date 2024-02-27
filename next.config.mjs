/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['tailwindui.com', 'images.unsplash.com','cdn.pixabay.com'],
        dangerouslyAllowSVG: true,
    },

   
};

export default nextConfig;
