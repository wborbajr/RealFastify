"use strict";

const fastify = require("fastify");
const cors = require("fastify-cors");
const fastifySession = require("fastify-session");
const fastifyCookie = require("fastify-cookie");

const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

const swagger = require("./config/swagger");
const config = require("./config/ecosystem.config");
const dbconnect = require("./config/mongo.config");

// const environment = process.env.NODE_ENV;
// console.log("process.env.NODE_ENV: " + environment);
// console.log("config " + config.app.ip_address);
// process.exit(1);

if (process.env.NODE_ENV !== "production") {
}

const options = {
  logger: true,
  ignoreTrailingSlash: true,
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
  origin: [
    /^http(|s)\:\/\/localhost(|:\d+)$/,
    /^http(|s)\:\/\/127\.0\.0\.1(|:\d+)$/,
  ],
  methods: ["GET", "OPTIONS", "POST"],
  credentials: true,
  maxAge: 1728000,
});

const PORT = config.app.port;
const ADDRESS = config.app.ip_address;

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
