module.exports = [
  {
    method: "GET",
    url: "/f1",
    option: {
      description: "Default",
      notes: "Returns a Hello World!",
      tags: ["api"], // ADD THIS TAG
    },
    handler: function (request, reply) {
      reply.send({ hello: "world..." });
    },
  },
  {
    method: "GET",
    url: "/f2",
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
