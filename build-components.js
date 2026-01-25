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

console.log(`Building ${componentFiles.length} components independently...\n`);

let successCount = 0;
let failCount = 0;
const errors = [];

// Build each component separately
for (const component of componentFiles) {
  try {
    console.log(`Building ${component.name}...`);

    await build({
      configFile: false,
      root: __dirname,
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
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === "style.css") {
                return `${component.name}.css`;
              }
              return `${component.name}-[name][extname]`;
            },
          },
        },
      },
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      logLevel: "warn",
    });

    successCount++;
  } catch (error) {
    failCount++;
    errors.push({ component: component.name, error: error.message });
    console.error(`✗ Failed to build ${component.name}: ${error.message}`);
  }
}

console.log(
  `\n✓ Successfully built ${successCount}/${componentFiles.length} components!`
);
if (failCount > 0) {
  console.log(`✗ Failed to build ${failCount} components`);
  process.exit(1);
}
