import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/APIs-implementations/",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/APIs-implementations/",
        name: "APIs-implementations",
        short_name: "APIs-implementations",
        description:
          "Designed and created user interface to render a different Quotes through implementing a different api.",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
