// build-components.js
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync, rmSync, mkdirSync, existsSync } from "node:fs";
import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

const __dirname = dirname(fileURLToPath(import.meta.url));
const componentDir = resolve(__dirname, "js/_component");
const outDir = resolve(__dirname, "pyvuetify/_static");

// Clean output directory
if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true });
}
mkdirSync(outDir, { recursive: true });

// Get all JS component files
const componentFiles = readdirSync(componentDir)
  .filter((file) => file.endsWith(".js"))
  .map((file) => ({
    name: file.replace(".js", ""),
    path: resolve(componentDir, file),
  }));

console.log(`Building ${componentFiles.length} components...\n`);

// Shared Vite config (reused across all builds)
const sharedConfig = {
  configFile: false,
  root: __dirname,
  resolve: {
    alias: {
      "vuetify/styles": resolve(__dirname, "node_modules/vuetify/lib/styles/main.css"),
      "vuetify/components": resolve(__dirname, "node_modules/vuetify/lib/components/index.js"),
      "vuetify/directives": resolve(__dirname, "node_modules/vuetify/lib/directives/index.js"),
      "vuetify": resolve(__dirname, "node_modules/vuetify"),
      "vue": resolve(__dirname, "node_modules/vue"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  logLevel: "warn",
};

// Step 1: Build shared CSS once (using first component as entry)
console.log("Building shared CSS...");
await build({
  ...sharedConfig,
  plugins: [vue(), vuetify({ autoImport: true })],
  build: {
    outDir,
    emptyOutDir: false,
    lib: {
      entry: componentFiles[0].path,
      fileName: () => `_css_build_temp.js`,
      formats: ["es"],
    },
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: () => "pyvuetify.css",
      },
    },
  },
});
// Remove the temp JS used only to extract CSS
rmSync(resolve(outDir, "_css_build_temp.js"), { force: true });
console.log("✓ Shared CSS built\n");

// Step 2: Build all component JS in parallel (no CSS extraction)
const CONCURRENCY = 4;
let successCount = 0;
let failCount = 0;
const errors = [];

async function buildComponent(component) {
  console.log(`Building ${component.name}...`);
  await build({
    ...sharedConfig,
    plugins: [vue(), vuetify({ autoImport: true })],
    build: {
      outDir,
      emptyOutDir: false,
      lib: {
        entry: component.path,
        fileName: () => `${component.name}.js`,
        formats: ["es"],
      },
      minify: true,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          // Discard CSS assets (already built above)
          assetFileNames: () => `_discard_[name].css`,
        },
      },
    },
  });
}

// Process in batches for controlled concurrency
for (let i = 0; i < componentFiles.length; i += CONCURRENCY) {
  const batch = componentFiles.slice(i, i + CONCURRENCY);
  const results = await Promise.allSettled(batch.map(buildComponent));

  for (let j = 0; j < results.length; j++) {
    if (results[j].status === "fulfilled") {
      successCount++;
    } else {
      failCount++;
      errors.push({ component: batch[j].name, error: results[j].reason.message });
      console.error(`✗ Failed to build ${batch[j].name}: ${results[j].reason.message}`);
    }
  }
}

// Clean up discarded CSS files
readdirSync(outDir)
  .filter((f) => f.startsWith("_discard_"))
  .forEach((f) => rmSync(resolve(outDir, f), { force: true }));

console.log(
  `\n✓ Successfully built ${successCount}/${componentFiles.length} components!`
);
if (failCount > 0) {
  console.log(`✗ Failed to build ${failCount} components`);
  process.exit(1);
}
