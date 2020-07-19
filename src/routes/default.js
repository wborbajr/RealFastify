module.exports = [
  {
    method: "GET",
    url: "/",
    option: {
      description: "Default",
      notes: "Returns a Hello World!",
      tags: ["api"], // ADD THIS TAG
    },
    handler: function (request, reply) {
      reply.send({ hello: "world..." });
    },
  },
];
