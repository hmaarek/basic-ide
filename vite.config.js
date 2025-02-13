import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.CODESPACES ? "0.0.0.0" : "localhost", // Auto-detect GitHub Codespaces
    port: 5173, // Ensure the correct port
    strictPort: true, // Prevent port auto-switching
    hmr: {
      protocol: "wss",
      host: process.env.GITHUB_CODESPACES_PORT ? "orange-umbrella-pj44r5vv7q936v5p-5173.app.github.dev" : "localhost",
      clientPort: 443,
    },
  },
});
