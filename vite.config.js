import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    minify: false,
    polyfill: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested2: resolve(__dirname, "join-mentorship.html"),
      },
    },
  },
  resolve: {
    extensions: [".js", ".mjs"],
  },
});
