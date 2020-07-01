const env = process.env.NODE_ENV;

const development = {
  app: {
    ip_address: "127.0.0.1",
    port: 3030,
  },
  db: {
    mongo: {
      url: "mongodb://localhost:27017/fastify-blog_dev",
      options: { useNewUrlParser: true, useUnifiedTopology: true },
    },
  },
  swagger: {
    host_port: "127.0.0.1:3030",
  },
};

const production = {
  app: {
    ip_address: "0.0.0.0",
    port: 5050,
  },
  db: {
    mongo: {
      url: "mongodb://localhost:27017/fastify-blog_prod",
      options: { useNewUrlParser: true, useUnifiedTopology: true },
    },
  },
  swagger: {
    host_port: "0.0.0.0:5050",
  },
};

const config = {
  development,
  production,
};

module.exports = config[env];
