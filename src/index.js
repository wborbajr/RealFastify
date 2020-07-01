"use strict";

const fastify = require("fastify");
const cors = require("fastify-cors");
const fastifySession = require("fastify-session");
const fastifyCookie = require("fastify-cookie");

const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

const swagger = require("./config/swagger");
const dbconnect = require("./config/mongo.config");
const config = require("./config/ecosystem.config");

if (process.env.NODE_ENV !== "production") {
}

const options = {
  logger: true,
  // https: {
  //   key: fs.readFileSync(path.join(__dirname, "/certificate/", "key.pem")),
  //   cert: fs.readFileSync(path.join(__dirname, "/certificate/", "cert.pem")),
  // },
};
const secretKey = {
  secret: "e299769ca11dd85bc1060292baee75aa",
};
const app = fastify(options);

app.register(fastifyCookie);
app.register(fastifySession, secretKey);

//swagger configuration
app.register(require("fastify-swagger"), swagger.options);

// registering mongodb plugin
app.register(dbconnect);

// enable cors
app.register(cors, {
  origin: "*",
});

const PORT = config.app.port;
const ADDRESS = config.app.host;

// import routes
const routes = require("./routes");
routes.forEach((route, index) => {
  app.route(route);
});

const start = async () => {
  try {
    await app.ready();
    await app.listen(PORT, ADDRESS);
    const log = `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT} .:: on http://${ADDRESS}:${PORT} ::. Main:(${__filename})`;

    app.log.info(log);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
