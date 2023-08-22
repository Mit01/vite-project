import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    minify: false,
    polyfill: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "list-of-pages.html"),
        nested2: resolve(__dirname, "join-mentorship.html"),
        nested3: resolve(__dirname, "JRclick2success.html"),
      },
    },
  },
  resolve: {
    extensions: [".js", ".mjs"],
  },
});
