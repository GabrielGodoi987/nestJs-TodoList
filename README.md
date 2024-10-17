## configurações do projeto

```bash
$ pnpm install
```

## compilar e rodar o projeto

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## rodar testes

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## para a conexão com o banco de dados funcionar corretamente
```bash
 # isso irá trazer a cli do prisma para o projeto
 $ npx prisma generate
```
