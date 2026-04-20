import { readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.join(process.cwd(), "components", "forge-institution", "dist");
const htmlPath = path.join(distDir, "index.html");

export async function GET() {
  const html = await readFile(htmlPath, "utf8");
  const rewrittenHtml = html.replaceAll('/assets/', '/institution-app/assets/');

  return new Response(rewrittenHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
