import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { VitePWA } from "vite-plugin-pwa";
import packageJson from "./package.json";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const define = {
    APP_TITLE: process.env.VITE_APP_TITLE ? process.env.VITE_APP_TITLE : "Unknown App Title",
    APP_SHORT_TITLE: process.env.VITE_APP_SHORT_TITLE ? process.env.VITE_APP_SHORT_TITLE : "UnknownApp",
    APP_URL: process.env.VITE_APP_URL ? process.env.VITE_APP_URL : "UnknownApp",
    APP_PROVIDER: process.env.VITE_APP_PROVIDER ? process.env.VITE_APP_PROVIDER : "Unknown App Provider",
    APP_PROVIDER_URL: process.env.VITE_APP_PROVIDER_URL ? process.env.VITE_APP_PROVIDER_URL : "",
    APP_PROVIDER_TWITTER: process.env.VITE_APP_PROVIDER_TWITTER ? process.env.VITE_APP_PROVIDER_TWITTER : "",
    APP_VERSION: packageJson.version ? packageJson.version + (mode === "development" ? "-DEV" : "") : "Unknown Version",
    APP_DESCRIPTION: packageJson.description ? packageJson.description : "",
    APP_REPOSITORY_URL: packageJson.repository.url ? packageJson.repository.url.replace(/^git\+|\.git$/g, "") : "",
    APP_REPOSITORY_NAME: packageJson.repository.url ? packageJson.repository.url.replace(/^git\+|\.git$/g, "").replace(/^https:\/\/github.com\/.*\//, "") : "",
  };
  return {
    root: "src",
    base: process.env.GITHUB_PAGES
      ? `/${define.APP_REPOSITORY_NAME}/`
      : "/",
    publicDir: "public",
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
      VitePWA({
        injectRegister: "inline",
        registerType: "autoUpdate",
        manifest: {
          name: define.APP_TITLE,
          short_name: define.APP_SHORT_TITLE,
          id: define.APP_REPOSITORY_NAME,
          description: define.APP_DESCRIPTION,
          orientation: "portrait",
          display: "standalone",
          start_url: "dashboard",
          lang: "ja",
          icons: [
            {
              src: "pwa/icon-maskable.webp",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/webp",
            },
            {
              src: "pwa/icon.webp",
              sizes: "512x512",
              purpose: "any",
              type: "image/webp",
            },
            {
              src: "pwa/icon.png",
              sizes: "512x512",
              purpose: "any",
              type: "image/png",
            }
          ],
          screenshots: [
            {
              "src": "pwa/screenshot_wide00.webp",
              "sizes": "1280x720",
              "type": "image/webp",
              "form_factor": "wide",
            },
            {
              "src": "pwa/screenshot_wide01.webp",
              "sizes": "1280x720",
              "type": "image/webp",
              "form_factor": "wide",
            },
            {
              "src": "pwa/screenshot_wide02.webp",
              "sizes": "1280x720",
              "type": "image/webp",
              "form_factor": "wide",
            },
            {
              "src": "pwa/screenshot_narrow00.webp",
              "sizes": "1138x2554",
              "type": "image/webp",
              "form_factor": "narrow",
              "platform": "android",
            },
            {
              "src": "pwa/screenshot_narrow01.webp",
              "sizes": "1138x2554",
              "type": "image/webp",
              "form_factor": "narrow",
              "platform": "android",
            },
            {
              "src": "pwa/screenshot_narrow02.webp",
              "sizes": "1138x2554",
              "type": "image/webp",
              "form_factor": "narrow",
              "platform": "android",
            },
            {
              "src": "pwa/screenshot_narrow03.webp",
              "sizes": "1138x2554",
              "type": "image/webp",
              "form_factor": "narrow",
              "platform": "android",
            },
          ],
          display_override: [
            "window-controls-overlay",
          ],
        },
        devOptions: {
          enabled: false,
        },
        workbox: {
          clientsClaim: true,
          skipWaiting: true,
          inlineWorkboxRuntime: true,
          globPatterns: ["**/*.{js,css,html,svg,ico,png,webp,woff2}"],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "gstatic-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                },
              }
            },
          ],
        },
      }),
    ],
    define: Object.fromEntries(
      Object.entries(define).map(([key, val]) => [key, JSON.stringify(val)])
    ),
  };
});