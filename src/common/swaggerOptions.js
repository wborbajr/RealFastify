const Package = require("../../package.json");

const swaggerOptions = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "RealFastify API Documentation",
      version: "v: " + Package.version,
      description: "Proof of Concept with Fastify",
      contact: {
        name: "Waldir Borba Junior",
        email: "wborbajr@gmail.com",
      },
      license: {
        name: "License " + Package.license,
      },
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

module.exports = swaggerOptions;
