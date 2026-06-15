// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_PATH = "/ravindras-bloom";

// Plugin to generate index.html for GitHub Pages static hosting after build
const generateIndexHtmlPlugin = () => ({
  name: "generate-index-html",
  apply: "build",
  writeBundle() {
    const clientDir = path.join(__dirname, "dist", "client");
    const assetsDir = path.join(clientDir, "assets");

    if (!fs.existsSync(assetsDir)) return;

    const files = fs.readdirSync(assetsDir);
    const jsFile = files.find((f) => f.match(/^index-[a-zA-Z0-9_-]+\.js$/));
    const cssFile = files.find((f) => f.match(/^styles-[a-zA-Z0-9_-]+\.css$/));

    if (!jsFile || !cssFile) {
      console.warn("⚠️  Could not find index.js or styles.css in assets");
      return;
    }

    const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base href="${BASE_PATH}/" />
    <title>Ravindra — Builder, Learner, Dreamer</title>
    <script type="module" src="${BASE_PATH}/assets/${jsFile}"><\/script>
    <link rel="stylesheet" href="${BASE_PATH}/assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

    fs.writeFileSync(path.join(clientDir, "index.html"), indexHtml);
    console.log("✅ Generated index.html for GitHub Pages");
  },
});

export default defineConfig({
  vite: {
    // GitHub Pages deployment base path configuration
    base: "/ravindras-bloom/",
    plugins: [generateIndexHtmlPlugin()],
  },
});
