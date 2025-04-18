import { defineConfig, loadEnv } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import packageJson from "./package.json";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const define = {
    __APP_TITLE__: process.env.VITE_APP_TITLE ? process.env.VITE_APP_TITLE : "Unknown App Title",
    __APP_SHORT_TITLE__: process.env.VITE_APP_SHORT_TITLE ? process.env.VITE_APP_SHORT_TITLE : "Unknown App Short Title",
    __APP_VERSION__: packageJson.version ? packageJson.version + (mode === "development" ? "-DEV" : "") : "Unknown Version",
    __APP_PROVIDER__: process.env.VITE_APP_PROVIDER ? process.env.VITE_APP_PROVIDER : "Unknown App Provider",
    __APP_PROVIDER_URL__: process.env.VITE_APP_PROVIDER_URL ? process.env.VITE_APP_PROVIDER_URL : "",
    __APP_DESCRIPTION__: packageJson.description ? packageJson.description : "",
    __APP_REPOSITORY_URL__: packageJson.repository.url ? packageJson.repository.url.replace(/^git\+|\.git$/g, "") : "",
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
      viteSingleFile(),
      {
        name: "html-transform",
        transformIndexHtml: {
          order: "pre" as const,
          handler: (html: string): string =>
            html.replace(/%(.*?)%/g, (match, p1) =>
              define[p1] ?? match),
        },
      },
    ],
    define: Object.fromEntries(
      Object.entries(define).map(([key, val]) => [key, JSON.stringify(val)])
    ),
  };
});