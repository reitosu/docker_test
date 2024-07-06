import { serve } from "https://deno.land/std@v0.39.0/http/server.ts";

const s = serve({ port: 1993 });
console.log("access to http://localhost:1993/");

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}