// ESM
import Fastify from "fastify";
import firstRoute from "./our-first-route";

const fastify = Fastify({ logger: true });
const port = 3000;

fastify.register(firstRoute);

fastify.listen(port, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is listening on ${address}
});
