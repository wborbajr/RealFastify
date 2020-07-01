const config = require("./ecosystem.config");

exports.options = {
  routePrefix: "/docs",
  exposeRoute: true,
  swagger: {
    info: {
      title: "RealFastify API",
      description:
        "RealFastify REST API, made with Node.js, MongoDB, Fastify and Swagger",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://github.com/csrodi/visitors-nodejs-server",
      description: "Find more info here",
    },
    host: config.swagger.host_port,
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};
