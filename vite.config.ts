import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr:{
        clientPort:443,
        host:'tiny-stat-pill-during.trycloudflare.com'
    }
  }
})
