/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
    },
    async rewrites() {
        return [{ source: "/favicon.ico", destination: "/kifah-logo.png" }];
    },
    // Suppress MetaMask extension errors in development
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    // Pin Turbopack root to this project (avoids picking up parent lockfiles)
    turbopack: {
        root: import.meta.dirname,
    },
    // Custom webpack configuration to handle extension errors (used with --webpack flag)
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Ignore MetaMask extension errors during build
            config.ignoreWarnings = [
                ...(config.ignoreWarnings || []),
                {
                    module: /chrome-extension/,
                },
            ];
        }
        return config;
    },
};

export default nextConfig;
