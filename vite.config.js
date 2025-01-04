import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  root: './',
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwind()]
    }
  }
})
