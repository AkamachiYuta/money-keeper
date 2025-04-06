import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const define = {
    __APP_TITLE__: process.env.VITE_APP_TITLE ? process.env.VITE_APP_TITLE : "Unknown App Title",
    __APP_VERSION__: process.env.npm_package_version ? process.env.npm_package_version + (mode === "development" ? "-DEV" : "") : "Unknown Version",
  }
  return {
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    server: {
      port: 4810,
    },
    plugins: [
      {
        name: "html-transform",
        transformIndexHtml: {
          enforce: "pre" as const,
          transform: (html: string): string =>
            html.replace(/%(.*?)%/g, (match, p1) => {
              return define[p1] ?? match
            }),
        },
      },
    ],
    define: Object.fromEntries(
      Object.entries(define)
        .map(([key, val]) => [key, JSON.stringify(val)])
    ),
  }
});