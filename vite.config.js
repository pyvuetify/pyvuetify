// vite.config.js
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync } from "node:fs";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Automatically detect all JS files in js/component directory
const componentDir = resolve(__dirname, "js/component");
const componentFiles = readdirSync(componentDir)
  .filter((file) => file.endsWith(".js"))
  .reduce((entries, file) => {
    const name = file.replace(".js", "");
    entries[name] = resolve(componentDir, file);
    return entries;
  }, {});

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  build: {
    outDir: resolve(__dirname, "pyvuetify/static"),
    lib: {
      entry: componentFiles,
      fileName: (format, entryName) => `${entryName}.js`,
      formats: ["es"],
    },
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Ensure each component is built as a separate file
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          // Extract CSS per component
          if (assetInfo.name.endsWith('.css')) {
            // Get the component name from the CSS source
            return '[name].css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
      // Externalize common dependencies to avoid duplication
      external: ['vue', 'vuetify'],
    },
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