import Fastify from "fastify";
import cors from "@fastify/cors";
import { reportsRoutes } from "./reports/reports.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "*",
});

fastify.register(reportsRoutes, { prefix: "/reports" });

try {
  await fastify.listen({ port: 6432 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
