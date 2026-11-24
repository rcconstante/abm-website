import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const baseRoutes = [
  "/",
  "/about/",
  "/subjects/",
  "/careers/",
  "/gallery/",
  "/resources/",
  "/quiz/",
  "/events/",
  "/contact/",
];

const galleryDir = path.join(root, "gallery");
const galleryEntries = await readdir(galleryDir, { withFileTypes: true });
const storyRoutes = galleryEntries
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith("__next."))
  .map((entry) => `/gallery/${entry.name}/`)
  .sort();

const routes = [...baseRoutes, ...storyRoutes];
const failures = [];
let checked = 0;

for (const route of routes) {
  const html = await readFile(path.join(root, route, "index.html"), "utf8");
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    failures.push(`${route}: expected exactly one h1`);
  for (const match of html.matchAll(
    /<(?:a|img|link)\b[^>]*\b(?:href|src)="([^"]+)"/g,
  )) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, "https://abm.local" + route);
    let filename = path.join(root, decodeURIComponent(url.pathname));
    try {
      if ((await stat(filename)).isDirectory())
        filename = path.join(filename, "index.html");
      await stat(filename);
      if (url.hash) {
        const destination = await readFile(filename, "utf8");
        if (
          !destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)
        )
          failures.push(`${route}: missing fragment ${href}`);
      }
      checked++;
    } catch {
      failures.push(`${route}: missing file ${href}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Verified ${routes.length} pages (${storyRoutes.length} gallery story pages) and ${checked} internal links, fragments, images, and assets.`,
  );
}
