# Brothers-Coffe
Site desenvolvido do absoluto zero. Voltado para uma lanchonete focada na venda de café.

# Arquitetura planejada (não é modelo)

BROTHERS-COFFE/
│
├─ frontend/
│  ├─ public/ 
│  │  └─ imagens/
│  │
│  ├─ src/
│  │  ├─ css/
│  │  │  ├─ global.css
│  │  │  ├─ home.css
│  │  │  ├─ cardapio.css
│  │  │  ├─ contato.css
│  │  │  ├─ sobre.css
│  │  │  └─ admin.css
│  │  │
│  │  ├─ js/
│  │  │  ├─ main.js
│  │  │  ├─ cardapio.js
│  │  │  └─ admin.js
│  │  │
│  │  ├─ pages/
│  │  │  ├─ index.html
│  │  │  ├─ cardapio.html
│  │  │  ├─ contato.html
│  │  │  ├─ sobre.html
│  │  │  └─ admin.html
│  │  │
│  │  └─ components/
│  │     ├─ header.html
│  │     └─ footer.html
│  │
│  └─ README.md
│
├─ backend/
│  ├─ src/
│  │  ├─ routes/
│  │  │  ├─ produtos.routes.js
│  │  │  ├─ pedidos.routes.js
│  │  │  └─ auth.routes.js
│  │  │
│  │  ├─ controllers/
│  │  │  ├─ produtos.controller.js
│  │  │  ├─ pedidos.controller.js
│  │  │  └─ auth.controller.js
│  │  │
│  │  ├─ database/
│  │  │  └─ db.js
│  │  │
│  │  ├─ app.js
│  │  └─ server.js
│  │
│  ├─ package.json
│  ├─ .env.example
│  └─ README.md
│
├─ docs/
│  └─ diagramas.md
│
├─ .gitignore
└─ README.md