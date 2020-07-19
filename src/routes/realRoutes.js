const BaseRoute = require("./base/baseRoute");

class RealRoutes extends BaseRoute {
  default() {
    return {
      method: "GET",
      url: "/",
      handler: (request, reply) => {
        reply.send({ hello: "world..." });
      },
    };
  }
  ping() {
    return {
      method: "GET",
      url: "/ping",
      handler: (request, reply) => {
        reply.send("pong...");
      },
    };
  }
}

module.exports = RealRoutes;

// {
//   method: 'PUT',
//   path: '/store/{id}',
//   options: {
//       handler: handlers.storeUpdate,
//       plugins: {
//           'hapi-swagger': {
//               responses: {
//                   '400': {
//                       'description': 'BadRequest'
//                   }
//               },
//               payloadType: 'form'
//           }
//       },
//       tags: ['api'],
//       validate: {
//           payload: Joi.object({
//               a: Joi.number().required().description('the first number')
//           })
//       }
//   }
// }
