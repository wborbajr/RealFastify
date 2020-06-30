// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

const dotenv = require("dotenv");
const cors = require("fastify-cors");
const dbconnect = require("./config/mongo.config");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "/config/ecosystem.dev.env",
  });
}

// Import Routes
const routes = require("./routes");

// Import Swagger Options
const swagger = require("./config/swagger");

// Registering plugins to fastify
fastify.register(dbconnect);
fastify.register(cors, {
  origin: "*",
});

const PORT = 5000; //process.env.PORT || 5050;
const ADDRESS = "127.0.0.1"; // process.env.ADDRESS || "127.0.0.1";

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.ready();
    await fastify.listen(PORT, ADDRESS);
    const log = `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT} .:: on http://${ADDRESS}:${PORT} ::. Main:(${__filename})`;

    fastify.log.info(log);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
