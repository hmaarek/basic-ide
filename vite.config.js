import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443,
    },
    middlewareMode: false,  // Ensure Vite serves static files
  },
  base: "/",
  publicDir: "public",
  build: {
    rollupOptions: {
      input: "public/index.html",
    },
  },
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === "/") {
        req.url = "/index.html"; // Force load index.html for root route
      }
      next();
    });
  },
});
