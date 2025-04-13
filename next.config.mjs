/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        dangerouslyAllowSVG: true,
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
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                
            },
            {
                protocol: 'https',
                hostname: 'widgets.guidestar.org',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'www.guidestar.org',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'mentorapromise.org',
                port: '',
                pathname: '/**'
            }
        ]
    },
    env: {
        NEXT_PUBLIC_PB_URL: process.env.NEXT_PUBLIC_PB_URL,
        PB_USER: process.env.PB_USER,
        PB_PASS: process.env.PB_PASS
    }
};

export default nextConfig;
