import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import mdx from '@mdx-js/rollup'

// Remark plugins
import remarkFrontmatter from 'remark-frontmatter'

// Rehype plugins
import rehypeShiki from '@shikijs/rehype'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
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
