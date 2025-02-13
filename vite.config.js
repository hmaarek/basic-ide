import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    hmr: false,  // 🔹 Disable Hot Module Reloading
    watch: {
      usePolling: true,  // 🔹 Fix file watcher issues in Codespaces
    },
  },
  base: "/",
  publicDir: "public",
});
