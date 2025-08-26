import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "vite-plugin-sitemap";
import { glob } from "glob";

const trainingRoutes = glob
  .sync("src/pages/training/*.tsx")
  .map((file) => {
    const fileName = path.basename(file, ".tsx");
    return `/training/${fileName.toLowerCase()}`;
  });

const dynamicRoutes = [
  "/home",
  ...trainingRoutes,
  "/kontakt",
  "/gallery",
  "/spotkania-psiarzy",
  "/search",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    sitemap({
      hostname: "https://www.szczekszczek.pl",
      dynamicRoutes,
      changefreq: "weekly",
      priority: 0.8,
      // @ts-ignore
      transform: ({ changefreq, priority, lastmod }, route) => {
        let newPriority = priority;
        if (route === "/home") {
          newPriority = 1.0;
        } else if (route === "/gallery" || route === "/spotkania-psiarzy") {
          newPriority = 0.7;
        } else if (route === "/search") {
          newPriority = 0.6;
        }
        return {
          loc: route,
          changefreq,
          priority: newPriority,
          lastmod,
        };
      },
    }),
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
