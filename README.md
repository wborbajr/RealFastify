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

## License

[MIT License](https://github.com/wborbajr/RealFastify/blob/master/LICENSE)
