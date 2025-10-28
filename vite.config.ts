import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Set the base path for GitHub Pages deployment, but use root for local dev
  base: command === 'build' ? '/Ai-resume-builder/' : '/',
}))
