/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com"
            },
            {
                protocol: "https",
                hostname: "files.tecnoblog.net"
            },

            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com"
            }
        ]
    },
    "reactStrictMode": false,
};

export default nextConfig;
