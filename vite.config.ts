import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { viteSingleFile } from "vite-plugin-singlefile";
import packageJson from "./package.json";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const define = {
    APP_TITLE: process.env.VITE_APP_TITLE ? process.env.VITE_APP_TITLE : "Unknown App Title",
    APP_SHORT_TITLE: process.env.VITE_APP_SHORT_TITLE ? process.env.VITE_APP_SHORT_TITLE : "Unknown App Short Title",
    APP_VERSION: packageJson.version ? packageJson.version + (mode === "development" ? "-DEV" : "") : "Unknown Version",
    APP_PROVIDER: process.env.VITE_APP_PROVIDER ? process.env.VITE_APP_PROVIDER : "Unknown App Provider",
    APP_PROVIDER_URL: process.env.VITE_APP_PROVIDER_URL ? process.env.VITE_APP_PROVIDER_URL : "",
    APP_DESCRIPTION: packageJson.description ? packageJson.description : "",
    APP_REPOSITORY_URL: packageJson.repository.url ? packageJson.repository.url.replace(/^git\+|\.git$/g, "") : "",
  };
  return {
    root: "src",
    build: {
      outDir: "../dist",
      emptyOutDir: true,
    },
    server: {
      port: 4810,
    },
    plugins: [
      {
        name: "html-transform",
        transformIndexHtml: {
          order: "pre" as const,
          handler: (html: string): string =>
            html.replace(/{(.*?)}/g, (match, p1) =>
              define[p1] ?? match),
        },
      },
      svelte(),
      viteSingleFile(),
    ],
    define: Object.fromEntries(
      Object.entries(define).map(([key, val]) => [key, JSON.stringify(val)])
    ),
  };
});