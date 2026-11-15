import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".md": "text/markdown; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url || "/", "http://localhost").pathname,
    );
    let filename = path.resolve(root, `.${pathname}`);
    if (filename !== root && !filename.startsWith(root + path.sep)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(filename)).isDirectory())
      filename = path.join(filename, "index.html");
    const data = await readFile(filename);
    response
      .writeHead(200, {
        "Content-Type":
          mime[path.extname(filename)] || "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
      })
      .end(data);
  } catch {
    response
      .writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
      .end(
        await readFile(path.join(root, "404.html")).catch(
          () => "Page not found",
        ),
      );
  }
}).listen(3417, "127.0.0.1", () => console.log("Local: http://127.0.0.1:3417"));
