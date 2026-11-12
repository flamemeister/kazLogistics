import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: "deployment-indexing",
      transformIndexHtml(html) {
        return mode === "production"
          ? html.replace(
              'content="noindex, nofollow"',
              'content="index, follow"',
            )
          : html;
      },
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "robots.txt",
          source:
            mode === "production"
              ? "User-agent: *\nAllow: /\n"
              : "User-agent: *\nDisallow: /\n",
        });
      },
    },
  ],
  server: { host: "127.0.0.1", port: 5176, strictPort: true },
  preview: { host: "127.0.0.1", port: 4176, strictPort: true },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("/node_modules/maplibre-gl/") ||
            id.includes("/node_modules/@maplibre/")
          )
            return "map-engine";
        },
      },
    },
  },
}));
