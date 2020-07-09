# RealFastify REST API, made with Node.js, MongoDB, Fastify and Swagger.

> Proof of Concept using Fastify
>
> Basically, an example Node.js project to manage visitors of a hypothetical center.
>
> Just for practical and educational purposes.

## Prerequisites

- [Nodejs](https://nodejs.org)
- MongoDB, [locally installed](https://www.mongodb.com/download-center/community) or provided by a [docker container](https://hub.docker.com/_/mongo)

## Build Setup

```bash
# (optional) create a docker container for the data base
docker run --name dev-mongo -d mongo:latest

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start
```

## Stress Test

```bash
npx autocannon -c 100 -d 5 -p 10 http://127.0.0.1:3030
Running 5s test @ http://127.0.0.1:3030
100 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬──────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max       │
├─────────┼──────┼──────┼────────┼────────┼──────────┼──────────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 318 ms │ 338 ms │ 29.11 ms │ 88.05 ms │ 640.43 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴──────────┴───────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 3043   │ 3043   │ 3279   │ 3777   │ 3317.8 │ 248.09  │ 3042   │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 639 kB │ 639 kB │ 689 kB │ 793 kB │ 696 kB │ 52.1 kB │ 639 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

17k requests in 5.15s, 3.48 MB read
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

- Fork my repository
- Clone it
- Make a branch with new features
- Commit all changes
- 'Push' your branch
- At Pull Requests from original project create a pull request with your commit

# Inicialização e Configuração do Docker

**Note:** Todos os comandos à seguir devem ser executados no terminal

## Postgres

- Configurando a imagem do postgres

```bash
docker run \
    --name postgres \
    -e POSTGRES_USER=dbadmin \
    -e POSTGRES_PASSWORD=123mudar \
    -e POSTGRES_DB=realdb \
    -p 5432:5432 \
    -d \
    postgres
```

- Ver as imagens instaladas na máquina
  docker ps -a

* Entrar no container postgres

```bash
docker exec -it postgres /bin/bash
```

- Após entrar no container postgres, roda o comando abaixo para iniciar a interface

```bash
docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer
```

## MongoDB

- Configurando a imagem do MongoDB

```bash
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=dbadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=123mudar \
    -d \
    mongo
```

- Configurando um Client para o MongoDB

```bash
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient
```

- Cria um usuário (admin) para acessar o mongo, também criar um banco de dados (realdb) e realiza o login no mesmo

```bash
docker exec -it mongodb \
  mongo --host localhost -u dbadmin -p 123mudar --authenticationDatabase admin \
  --eval "db.getSiblingDB('realdb').createUser({user: 'realuser', pwd: '123mudar', roles: [{role: 'readWrite', db: 'realdb'}]})"
```

---

## Outros comandos necessários do docker

- Para Ver todas as imagens que estão na máquina:

```bash
docker ps -a
```

- Para Iniciar uma imagem que está instalada na máquina:

```bash
docker start id_ou_nome_da_imagem
```

- Para Parar uma imagem que está instalada na máquina:

```bash
docker stop id_ou_nome_da_imagem
```

- Para Remover uma imagem da máquina:

```bash
docker rm id_ou_nome_da_imagem
```

## How To Create a Pull Request on GitHub

[Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)

## License

[MIT License](https://github.com/wborbajr/RealFastify/blob/master/LICENSE)
