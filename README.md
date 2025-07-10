# 📄 Desafio Técnico - Perfil de Usuário

Este projeto consiste em uma aplicação web para exibir e editar o perfil de um usuário, com **backend em Node.js + Express** e **frontend em React + Vite + Bootstrap**.

---

## 🚀 Como rodar localmente

### 🛠️ Requisitos

- Node.js (versão 18 ou superior)
- MySQL rodando localmente
- npm

---

### 🗄️ Backend

1. Configure o banco de dados MySQL e crie a tabela `users` (exemplo abaixo).
2. Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000
```

````

3. Instale as dependências e inicie o servidor:

### 🗄️ Backend

```bash
cd backend
npm install
npm run dev
```

O backend será iniciado em `http://localhost:3000`.

---

### 💻 Frontend

1. Instale as dependências e rode o projeto:

```bash
cd frontend
npm install
npm run dev
```

O frontend será iniciado em `http://localhost:5173`.

---

## 🧱 Estrutura da Tabela `users`

```sql
CREATE TABLE users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone_number VARCHAR(20) NOT NULL,
  birth_date DATE,
  street VARCHAR(100),
  number VARCHAR(10),
  complement VARCHAR(50),
  neighborhood VARCHAR(50),
  city VARCHAR(50) NOT NULL,
  state VARCHAR(2) NOT NULL,
  postal_code VARCHAR(10) NOT NULL,
  profile_picture VARCHAR(255),
  biography TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 🌐 Deploy

_Este projeto ainda não está publicado online._
Todas as instruções estão disponíveis acima para rodar localmente.

---

## ❓ Dúvidas

Qualquer dúvida ou problema, fique à vontade para entrar em contato.

````
