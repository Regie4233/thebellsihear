/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "n.simon.us.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "**.simon.us.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '**'
            },
            {
                protocol: 'http',
                hostname: '3.148.108.186',
                port: '8081',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
