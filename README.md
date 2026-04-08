# 🚀 API ZelaCidade - Em construção...

## 📌 Sobre o Projeto

A **ZelaCidade API** é uma API RESTful desenvolvida para o registro e gerenciamento de problemas urbanos, permitindo que cidadãos reportem ocorrências de forma estruturada.

### 🧩 Tipos de ocorrências suportadas:
- 🕳️ Buracos
- 💧 Vazamentos
- 🗑️ Lixo
- 💡 Iluminação pública

A API permite operações completas de **CRUD**:
- Criar
- Listar
- Atualizar
- Remover incidentes

---

## 🎯 Objetivo

Centralizar e organizar o registro de problemas urbanos, facilitando a comunicação e priorização de demandas.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** — Ambiente de execução
- **Express** — Framework web
- **SQLite3** — Banco de dados leve e local
- **Nodemon** — Reload automático em desenvolvimento
- **Postman** — Testes de requisições HTTP

---

## 📦Instalação

```bash
npm install
```

## ▶️Como Executar

```bash
npm run dev
```

A aplicação estará disponível em:

👉 http://localhost:3000

## ⚙️ Estrutura do Projeto

📁 ZELACIDADE1

┣ 📁 .vscode

┣ 📁 node_modules

┣ 📄 .gitignore

┣ 📄 database.db

┣ 📄 database.js

┣ 📄 package-lock.json

┣ 📄 package.json

┗ 📄 server.js

---

🗄️ Banco de Dados

O banco é criado automaticamente ao iniciar a aplicação.

```bash
database.db
```

 ## 🧾 Estrutura da Tabela: incidentes

 | Campo            | Descrição                 |
| ---------------- | ------------------------- |
| id               | Identificador único       |
| tipo_problema    | Tipo do problema          |
| localizacao      | Local da ocorrência       |
| descricao        | Detalhes do incidente     |
| prioridade       | Baixa, Média ou Alta      |
| nome_solicitante | Nome do solicitante       |
| data_registro    | Data do registro          |
| hora_registro    | Hora do registro          |
| status_resolucao | Status (Padrão: Pendente) |


## 🔗 Endpoints
## 📍 Rota Inicial

```http
GET /
```
Retorna uma página HTML com informações básicas da API.

# 📄 Listar todos os incidentes

```http
GET /incidentes
```

# 🔍 Buscar incidente por ID

```http
GET /incidentes/:id
```

# 📌 Exemplo:

```http
GET /incidentes/1
```

## ➕ Criar novo incidente

```http
POST /incidentes
```

## Body (JSON)

```json
{
  "tipo_problema": "Iluminação",
  "localizacao": "Rua das Flores, 123, Bairro das Margaridas",
  "descricao": "Poste queimado há dias",
  "prioridade": "Média",
  "nome_solicitante": "Ana Clara",
  "data_registro": "16/03/2026",
  "hora_registro": "10:30"
}
```

## ✏️ Atualizar incidente

```http
PUT /incidentes/:id
```

## Body (JSON)

```json
{
  "descricao": "Luz do poste foi trocada",
  "prioridade": "Baixa",
  "status_resolucao": "Resolvido"
}
```

## ❌ Deletar incidente

```http
DELETE /incidentes/:id
```

## 🔐 Segurança

# A API utiliza queries parametrizadas para evitar SQL Injection:

```SQL
WHERE id = ?
```
# ✔️ Boa prática essencial em aplicações backend


## 📚 Conceitos Aplicados

- REST API
- CRUD (Create, Read, Update, Delete)
- Arquitetura básica em camadas
- Métodos HTTP (GET, POST, PUT, DELETE)

  ## 👨‍💻 Autor
  #Projeto desenvolvido para fins educacionais com foco em aprendizado de backend.
