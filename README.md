# Finance Control Backend

Este é o backend de um sistema de controle financeiro, criado com **Node.js**, **TypeScript**, e **Express**. Ele fornece funcionalidades para gerenciar receitas, despesas, autenticação de usuários e proteção de segurança básica para APIs. O sistema também implementa caching com Redis, controle de limite de taxa de requisições e criptografia de senhas.

## Funcionalidades

- **Cadastro e autenticação de usuários**
- **Gestão de receitas e despesas**
- **Segurança com rate limiting e criptografia**
- **Mecanismo de cache com Redis**
- **Validação de dados com Zod**

## Tecnologias Utilizadas

- **Node.js** e **Express** para o servidor web
- **TypeScript** para tipagem e melhor manutenção do código
- **Prisma** como ORM para interagir com o banco de dados PostgreSQL
- **PostgreSQL** como banco de dados relacional
- **Redis** para caching
- **Tsyringe** para injeção de dependências
- **Zod** para validação de dados de entrada

## Configuração do Ambiente

### Pré-requisitos

- **Node.js** versão 16 ou superior
- **PostgreSQL**
- **Redis** ou Docker para execução do Redis

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/adelmomenezes123/finance-control-backend.git
   cd finance-control-backend

   ```

2. **Instale as dependências:**

   ```bash
   npm instal

   ```

3. **Configuração do banco de dados:**

   ### No arquivo .env, configure as variáveis de ambiente:

   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/finance_control"
   JWT_SECRET="sua_chave_secreta_aqui"
   REDIS_URL="redis://localhost:6379"

   ```

4. **Configuração do Prisma:**

   ```bash
   npx prisma migrate dev

   ```

5. **Executando o servidor Redis:**

   ```bash
   docker run --name redis-server -p 6379:6379 -d redis

   ```

6. **Para iniciar o Redis usando Docker:**

   ```bash
   docker run --name redis-server -p 6379:6379 -d redis

   ```

7. **Iniciar o servidor:**

   ```bash
   npm run dev
   ```

### Endpoints da API

## Autenticação

**POST** /auth/register 
   - Registra um novo usuário

**POST** /auth/login 
   - Realiza login e retorna um token JWT

## Finanças

**GET** /finances/receitas 
   - Lista todas as receitas do usuário logado

**POST** /finances/receitas 
   - Adiciona uma nova receita

**GET** /finances/despesas
   - Lista todas as despesas do usuário logado

**POST** /finances/despesas
   - Adiciona uma nova despesa

## Usuários

**GET** /user 
   - Retorna informações do usuário logado

### Contribuição

- Contribuições são bem-vindas! Por favor, abra um pull request ou issue se tiver sugestões de melhoria.

### Licença

- Este projeto está sob a licença MIT.

- Este README.md` fornece uma explicação clara de como instalar, configurar e utilizar o sistema, incluindo informações de segurança e requisitos específicos para a configuração local.
