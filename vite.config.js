import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Ensures it's accessible in GitHub Codespaces
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443,
    },
  },
  base: "./",  // Ensures correct routing in GitHub Codespaces
});
