import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Auto-detect the correct host (required for Codespaces)
    port: 5173,  // Ensure it's fixed to 5173
    strictPort: true,
    hmr: {
      clientPort: 443,  // Required for Hot Module Reloading in Codespaces
    },
  },
  base: "./",  // Ensures correct routing in GitHub Codespaces
});
