const fastifyPlugin = require("fastify-plugin");
const mongoose = require("mongoose");
const config = require("./ecosystem.config");

// Connect to DB
async function dbConnector(fastify, options) {
  try {
    const url = config.db.mongo.url;
    const db = await mongoose.connect(url, config.db.mongo.options);
    console.log("Database is connected");
    fastify.decorate("mongo", db);
  } catch (err) {
    console.log(err);
  }
}
module.exports = fastifyPlugin(dbConnector);
