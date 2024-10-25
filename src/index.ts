import { Hono } from "hono";
import type { HttpChainClient } from "tlock-js";
import { roundAt, Buffer, mainnetClient } from "tlock-js";
globalThis.Buffer = Buffer; // required

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/roundAt/:time", async (c) => {
  const client: HttpChainClient = mainnetClient();
  const drandChainInfo = await client.chain().info();
  const timeStr = c.req.param("time");
  const time = Number(timeStr);
  console.log({ time });
  const round = roundAt(time, drandChainInfo);
  return c.json({ round });
});

export default app;
