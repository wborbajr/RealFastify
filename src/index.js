const path = require("path");
const fs = require("fs");

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true,
  // https: {
  //   key: fs.readFileSync(path.join(__dirname, "/certificate/", "key.pem")),
  //   cert: fs.readFileSync(path.join(__dirname, "/certificate/", "cert.pem")),
  // },
});

const cors = require("fastify-cors");
const dotenv = require("dotenv");
const dbconnect = require("./config/mongo.config");

if (process.env.NODE_ENV !== "production") {
  const ecosystem = path.join(__dirname, "/config/", "ecosystem.dev.env");
  console.log("ecosystem: " + ecosystem);
  dotenv.config();
}

// import routes
const routes = require("./routes");

// import swagger options
const swagger = require("./config/swagger");

// registering mongodb plugin
fastify.register(dbconnect);

// enable cors
fastify.register(cors, {
  origin: "*",
});

const PORT = process.env.FASTIFY_PORT || 5000;
const ADDRESS = process.env.FASTIFY_ADDRESS || "127.0.0.1";

// register routes
routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.ready();
    const addr = await fastify.listen(PORT, ADDRESS);
    const log = `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT} .:: on http://${ADDRESS}:${PORT} ::. Main:(${__filename})`;

    // fastify.log.info(log);
    console.log(log);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
