import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5096,
    host: '0.0.0.0',
    allowedHosts: ['sangimiano.gime.cyberpunk.co.in', 'sangimi.cyberpunk.co.in', 'dripdown.cyberpunk.co.in']
  }
})
