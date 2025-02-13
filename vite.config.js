import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensure external access in GitHub Codespaces
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Required for Hot Module Reloading in Codespaces
    },
  },
  base: "/", // Ensure Vite serves from the correct root
  build: {
    rollupOptions: {
      input: "public/index.html", // Explicitly set index.html as the entry point
    },
  },
});
