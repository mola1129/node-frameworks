`use strict`;
// Require the framework and instantiate it

// ESM
import Fastify from "fastify";
const fastify = Fastify({ logger: true });
const port = 3000;

// // CommonJs
// const fastify = require("fastify")({
//   logger: true,
// });

// Declare a route
// async/await version
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

// fastify.get("/", (request, reply) => {
//   reply.send({ hello: "world" });
// });

// Run the server!
// async/await version
const start = async () => {
  try {
    await fastify.listen(port);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

// fastify.listen(port, (err, address) => {
//   if (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
//   // Server is now listening on ${address}
// });
