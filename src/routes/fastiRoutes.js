const BaseRoute = require("./base/baseRoute");

class FastiRoutes extends BaseRoute {
  f1() {
    return {
      method: "GET",
      url: "/f1",
      handler: (request, reply) => {
        reply.send({ hello: "f1..." });
      },
    };
  }
  f2() {
    return {
      method: "GET",
      url: "/f2",
      handler: (request, reply) => {
        reply.send("f2...");
      },
    };
  }
}

module.exports = FastiRoutes;

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
