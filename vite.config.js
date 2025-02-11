import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Ensures it is accessible in GitHub Codespaces
    port: 5173,       // Keep it fixed for GitHub Codespaces
    strictPort: true, // Avoids auto-switching ports
    hmr: {
      clientPort: 443, // Ensures Hot Module Reloading works in Codespaces
    },
  },
  base: "/",  // Ensure correct base path
});
