const fastify = require("fastify");

const server = fastify();

PORT = 3000;

server.listen(PORT, function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT} .::  ::. Main:(${__filename})`
  );
});
