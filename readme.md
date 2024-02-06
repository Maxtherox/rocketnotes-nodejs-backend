# RocketNotes Node.js Backend

## Descrição

O RocketNotes Node.js Backend é a parte do servidor de uma aplicação desenvolvida para gerenciar notas, permitindo aos usuários criar, visualizar e excluir notas de maneira eficiente. O backend é construído usando Node.js, Express e SQLite, proporcionando uma base robusta para a aplicação.

## Como Utilizar

Siga as instruções abaixo para configurar o ambiente de desenvolvimento, instalar as dependências e iniciar o servidor.

### Pré-requisitos

- Node.js instalado (https://nodejs.org/)
- NPM (Node Package Manager) ou Yarn

### Configuração

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/rocketnotes-nodejs-backend.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd rocketnotes-nodejs-backend
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   AUTH_SECRET=seu_segredo_jwt
   PORT=3333
   ```

   Certifique-se de substituir `seu_segredo_jwt` por uma string segura.

4. Execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

### Migração do Banco de Dados

1. Execute o seguinte comando para realizar as migrações do banco de dados:

   ```bash
   npm run migrate
   ```

   ou

   ```bash
   yarn migrate
   ```

   Isso garantirá que o banco de dados SQLite seja criado e esteja pronto para uso.

### Inicialização do Servidor

1. Para iniciar o servidor em modo de desenvolvimento, execute:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

   O servidor estará acessível em `http://localhost:3333`.

2. Para iniciar o servidor em modo de produção, execute:

   ```bash
   npm start
   ```

   ou

   ```bash
   yarn start
   ```

## Rotas Disponíveis

- **POST /users:** Cria um novo usuário.
- **PUT /users:** Atualiza informações do usuário autenticado.
- **PATCH /users/avatar:** Atualiza o avatar do usuário autenticado.
- **POST /sessions:** Cria uma sessão de usuário (login).
- **GET /notes:** Lista notas do usuário autenticado.
- **POST /notes:** Cria uma nova nota.
- **GET /notes/:id:** Obtém detalhes de uma nota específica.
- **DELETE /notes/:id:** Exclui uma nota específica.
- **GET /tags:** Lista as tags do usuário autenticado.

Certifique-se de consultar a documentação completa no código-fonte para obter mais detalhes sobre cada rota e suas funcionalidades.

## Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

ou

```bash
yarn test
```

Isso iniciará os testes definidos na aplicação e fornecerá informações sobre os resultados.

## Contribuições

Contribuições são bem-vindas! Se você encontrar problemas, bugs ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a Licença ISC - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.

---

Esperamos que o RocketNotes Node.js Backend facilite o desenvolvimento de suas aplicações de gerenciamento de notas. Sinta-se à vontade para explorar, modificar e contribuir para este projeto!
