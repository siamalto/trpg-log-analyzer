import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trpg-log-analyzer/',
  plugins: [react()],
})
