// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gr-site/', // 👈 This is what GitHub Pages needs!
  plugins: [react()]
})
