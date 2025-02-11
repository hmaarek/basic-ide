import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Allows external access (needed for GitHub Codespaces)
    port: 5173,       // Default Vite port
    strictPort: true, // Ensures it doesn’t pick a different port
  },
});
