import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/*", (c) => c.json({ name: "Hello Hono and Vue SPA Example" }));

export default app;
