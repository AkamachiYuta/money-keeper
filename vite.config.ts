import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte"
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
    APP_REPOSITORY_NAME: packageJson.repository.url ? packageJson.repository.url.replace(/^git\+|\.git$/g, "").replace(/^https:\/\/github.com\/.*\//, "") : "",
  };
  return {
    root: "src",
    base: process.env.GITHUB_PAGES
      ? `/${define.APP_REPOSITORY_NAME}/`
      : "/",
    build: {
      outDir: "../dist",
      minify: "terser",
      emptyOutDir: true,
      copyPublicDir: true,
    },
    server: {
      port: 3123,
    },
    preview: {
      port: 3123,
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
    ],
    define: Object.fromEntries(
      Object.entries(define).map(([key, val]) => [key, JSON.stringify(val)])
    ),
  };
});