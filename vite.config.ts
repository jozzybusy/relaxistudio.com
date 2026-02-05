import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 确保所有静态资源都被正确处理（支持大小写扩展名）
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  publicDir: 'public', // 明确指定 public 目录
})
