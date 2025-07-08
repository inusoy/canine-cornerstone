import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,ttf}"],
      },
      includeAssets: ["favicon.ico", "og-image.png", "placeholder.svg"],
      manifest: {
        name: "Szczek Szczek",
        short_name: "Szczek Szczek",
        description: "Profesjonalne Szkolenia Psów",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/lovable-uploads/23489cfb-856c-4f3f-908f-3aa9d5cb11b8.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/lovable-uploads/23489cfb-856c-4f3f-908f-3aa9d5cb11b8.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/lovable-uploads/23489cfb-856c-4f3f-908f-3aa9d5cb11b8.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
