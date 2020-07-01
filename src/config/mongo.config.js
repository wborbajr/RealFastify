const fastifyPlugin = require("fastify-plugin");
const mongoose = require("mongoose");
const config = require("./ecosystem.config");

// Connect to DB
async function dbConnector(fastify, options) {
  try {
    const url = config.mongo.uri;
    const db = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
    fastify.decorate("mongo", db);
  } catch (err) {
    console.log(err);
  }
}
module.exports = fastifyPlugin(dbConnector);
