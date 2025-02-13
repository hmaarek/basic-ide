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
    watch: {
      usePolling: true, // 🔹 Fix file watcher issues in GitHub Codespaces
    },
  },
  resolve: {
    extensions: [".js", ".jsx"], // 🔹 Ensure .jsx is correctly resolved
  },
  base: "/",
  publicDir: "public",
});
