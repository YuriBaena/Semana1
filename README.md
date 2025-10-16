# Semana1 - Projeto de Estudo Fullstack

Este é um projeto fullstack desenvolvido para estudos, envolvendo:

- **Backend:** Spring Boot + PostgreSQL
- **Frontend:** Angular
- **Banco de dados:** PostgreSQL
- **Orquestração:** Docker e Docker Compose

---

## Estrutura do Projeto

Semana1/
- back/estudo/          → Código do backend (Spring Boot)
- front/appSimples/     → Código do frontend (Angular)
- docker-compose.yml    → Arquivo de orquestração Docker
- README.md             → Este arquivo

---

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Como rodar o projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/YuriBaena/Semana1.git
    cd Semana1
    ```

2. Build e inicialização de todos os containers:

    ```bash
    docker compose up --build -d
    ```

3. Verifique se os containers estão rodando:

    ```bash
    docker ps
    ```

---

## Acessando a aplicação

- **Frontend (Angular):** [http://localhost:4200](http://localhost:4200)  
  Página inicial com formulário para adicionar usuários e listar os cadastrados.

- **Backend (Spring Boot):** [http://localhost:8080/usuarios](http://localhost:8080/usuarios)  
  Endpoints REST para manipulação de usuários.

- **Banco de Dados (PostgreSQL):** porta 5432  
  Usuário: `yuri`  
  Senha: `senha123`  
  Database: `estudo`

---

## Comandos úteis

- Entrar no container do backend:

    ```bash
    docker exec -it backend_estudo sh
    ```

- Entrar no container do PostgreSQL:

    ```bash
    docker exec -it banco_estudo psql -U yuri -d estudo
    ```

- Parar todos os containers:

    ```bash
    docker compose down
    ```

---

## Tecnologias utilizadas

- Java 17 + Spring Boot
- Angular 17 (standalone components)
- PostgreSQL 15
- Docker & Docker Compose

---

## Observações

- O frontend foi configurado para se comunicar com o backend via Nginx (proxy).
- Todos os dados são persistidos em um volume Docker (`pgdata`).

---

## Autor

[Yuri Baena](https://github.com/YuriBaena)
