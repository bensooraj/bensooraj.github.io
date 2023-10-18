import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';

const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.mdx?$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: '@mdx-js/loader',
                    options: {
                        providerImportSource: '@mdx-js/react',
                        remarkPlugins: [remarkFrontmatter],
                        rehypePlugins: [rehypeHighlight],
                    },
                },
            ],
        });

        return config;
    },
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    images: {
        loader: 'akamai',
        path: '',
    },
    optimizeFonts: true,
    // assetPrefix: './',
};

export default nextConfig;
