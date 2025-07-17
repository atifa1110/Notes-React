import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve:{
      alias:{
        "@": path.resolve(import.meta.dirname, "src"),
        "@utils": path.resolve(import.meta.dirname, "utils"),
      }
    },
})
