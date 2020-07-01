module.exports = [
  {
    method: "GET",
    url: "/",
    handler: function (request, reply) {
      reply.send({ hello: "world" });
    },
  },
];
