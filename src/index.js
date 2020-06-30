// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

const cors = require("fastify-cors");
const dotenv = require("dotenv");
const dbconnect = require("./config/mongo.config");

// if (process.env.NODE_ENV !== "production") {
dotenv.config({
  path: "./config/ecosystem.dev.env",
});
// }

// import routes
const routes = require("./routes");

// Import Swagger Options
const swagger = require("./config/swagger");

// Registering plugins to fastify
fastify.register(dbconnect);

// enable cors
fastify.register(cors, {
  origin: "*",
});

const PORT = process.env.PORT || "5000";
const ADDRESS = process.env.ADDRESS || "127.0.0.1";

// register routes
routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.ready();
    const addr = await fastify.listen(PORT, ADDRESS);
    const log = `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT} .:: on http://${addr}:${PORT} ::. Main:(${__filename})`;

    fastify.log.info(log);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
