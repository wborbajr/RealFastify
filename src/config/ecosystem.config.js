const config = {};

config.app = {};
config.env = {};
config.mongo = {};

//
config.app.port = 3030;
config.app.host = "0.0.0.0";

//
config.mongo.uri = "mongodb://localhost:27017/fastify-blog";

module.exports = config;
