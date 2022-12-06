# APP_AGENDA BACKEND REPOSITORY

## NODE + POSTGRES API

## Instalation:

### Criando Postgres Database:

- Abra seu terminal:
- Abra o psql com o comando `psql -U USER_NAME` USER_NAME deve ser o nome de seu
  usuário postgres
- Se seu usuário e seu pasword estiverem corretos aparecerá `postgres=#` no seu
  terminal.
- Agora crie uma database para rodarmos esta API
  `CREATE DATABASE NOME_DA_DATABASE;` não esqueça o ponto e virgula ;
- Verifique se sua database foi criada rodando o comando \l ainda dentro do psql
- Se preferir pode criar a database postgres de outra forma.

### Configurando o .env e conectando a API à database:

- Clone este repositório.
- Busque o arquivo .env.example dentro desse repositório
- Configure o .env com suas credencias do Postgres e database criada.
- Com o .env devidamente configurado rode os comandos:
- `yarn install`
- `yarn typeorm migration:run -d src/data-source.ts`
- `yarn dev`
- Agora temos nossa database rodando na porta 3001.
