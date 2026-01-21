// vite.config.js
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  build: {
    outDir: resolve(__dirname, "pyvuetify/static"),
    lib: {
      entry: resolve(__dirname, "js/component/alert.js"),
      fileName: "alert",
      formats: ["es"],
    },
    minify: false, // Uncomment to make it easier to debug errors.
  },
  define: {
    // DOCS: https://vite.dev/guide/build.html#css-support
    // > In library mode, all import.meta.env.* usage are statically replaced when building for production.
    // > However, process.env.* usage are not, so that consumers of your library can dynamically change it.
    //
    // The consumer of the widget is a webview, which does not have a top level process object.
    // So we need to replace it with a static value.
    "process.env.NODE_ENV": '"production"',
  },
});
