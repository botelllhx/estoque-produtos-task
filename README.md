# 📦 Estoque de Produtos - Desafio Técnico

Sistema simples de gestão de estoque de produtos atendendo a demanda do desafio técnico, desenvolvido com React (Vite), Node.js (Express) e PostgreSQL.

---

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, Sequelize, PostgreSql
- **Frontend**: React.js (Vite), Axios, React Router
- **Estilização**: CSS moderno e responsivo e SweetAlert2 para notificações

---

## Como Rodar o Projeto

#### Clone o Repositório
```bash
git clone https://github.com/botelllhx/estoque-produtos-task.git
cd estoque-produtos-task
```

---

### Configurar o Backend: 

Acesse a pasta do backend:
```bash
cd backend
```

Instale as dependências:
```bash
npm install
```

Crie um arquivo .env na raíz do do bakcend e configure conforme o banco:
```bash
DB_NAME=estoque
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_DIALECT=postgres
PORT=5000
```

Criar o banco de dados:
```bash
npx sequelize-cli db:create
```

Aplicar as migrations:
```bash
npx sequelize-cli db:migrate
```

Rodar o servidor:
```bash
npm run dev
```

---

### Configurar o Frontend:

Acesse a pasta do frontend:
```bash
cd ../frontend
```

Instale as dependências:
```bash
npm install
```

Inicie o frontend:
```bash
npm run dev
```

Acesse no navegador:
```bash
http://localhost:5173/
```

---

### Endpoints da API

- GET /produtos : Lista todos os produtos
- POST /produtos : Adiciona um novo produto
- PUT /produtos:id : Atualiza um produto existente
- PATCH /produtos/:id/incrementar : Aumenta a quantidade do produto em 1
- PATCH /produtos/:id/decrementar : Diminui a quantidade do produto em 1
- DELETE /produtos/:id : Remove um produto com quantidade 0
