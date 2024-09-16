import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import mdx from '@mdx-js/rollup'

// Custom plugins
import { Galilee } from './src/vite-custom-plugins/galilee'
import { Eden } from './src/vite-custom-plugins/eden'

// Remark plugins
import remarkFrontmatter from 'remark-frontmatter'

// Rehype plugins
import rehypeShiki from '@shikijs/rehype'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    Galilee(),
    Eden(),
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [
          remarkFrontmatter,
        ],
        remarkRehypeOptions: {},
        rehypePlugins: [
          [rehypeShiki, { theme: 'dark-plus' }],
        ],
      }),
    },
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
