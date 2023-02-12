/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, _) => ({
        ...config,
        watchOptions: {
            ...config.watchOptions,
            poll: 800,
            aggregateTimeout: 300,
        },
    }),
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/:path*', // Proxy to Backend
            },
        ];
    },
};

module.exports = nextConfig;
