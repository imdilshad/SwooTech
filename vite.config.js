import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://ecommbackend-f6t0.onrender.com'
    }
  },
  plugins: [react()],
})
