import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : "/Whos_That_Pokemon/",
  plugins: [react()],
})
