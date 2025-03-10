import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import { protectedRouter } from "./routes/protectedRouter";

const PORT = process.env.PORT || 3000;

const app = new Elysia()
    .use(swagger())
    .use(cors())
    .get("/", () => "Hello Elysia")
    .get("/hello", "Do you miss me?") // ?? undefined is not an object (evaluating 'c.set')
    .use(protectedRouter)
    .listen(PORT);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);