import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // 添加这一行，确保路径从根目录开始
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
