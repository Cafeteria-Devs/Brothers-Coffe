import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Liste aqui todas as suas páginas
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'pages/login.html'),
        cardapio: resolve(__dirname, 'pages/cardapio.html'),
        restaurantes: resolve(__dirname, 'pages/restaurantes.html'),
        contatos: resolve(__dirname, 'pages/contatos.html'),
        apoiadores: resolve(__dirname, 'pages/apoiadores.html'),
        comprar: resolve(__dirname, 'pages/comprar.html'),
      },
    },
  },
})
