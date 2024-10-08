/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com"
            }
        ]
    },
    "reactStrictMode": false,
};

export default nextConfig;
