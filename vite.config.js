import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Sem bloco server = Vite escolhe a porta padrão dele
})
