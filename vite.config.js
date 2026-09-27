import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root,
  publicDir: false,
  build: {
    outDir: path.join(root, "dist"),
    emptyOutDir: true,
    minify: "esbuild",
    rollupOptions: {
      input: path.join(root, "src", "html", "index.html"),
    },
  },
});
