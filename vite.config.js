import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "1.html"),
        nested2: resolve(__dirname, "2.html"),
        nested3: resolve(__dirname, "3.html"),
      },
    },
  },
  resolve: {
    extensions: [".js", ".mjs"],
  },
});
