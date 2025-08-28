import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Hillel-HW-24.1/'   // имя репозитория на GitHub
})