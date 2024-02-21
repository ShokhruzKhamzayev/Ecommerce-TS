/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.graphassets.com"]
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
