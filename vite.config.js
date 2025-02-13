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
  },
  base: "/", 
  publicDir: "public",  // Ensure Vite detects the public directory
  build: {
    rollupOptions: {
      input: "public/index.html",  // Force Vite to use index.html
    },
  },
});
