import { defineConfig } from 'vite'

export default defineConfig({
  // Set by CI to "/<repo-name>/" so assets resolve correctly on GitHub Pages
  base: process.env.VITE_BASE_PATH || '/',
})
