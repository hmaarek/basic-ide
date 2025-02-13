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
      ignored: ["**/node_modules/**", "**/dist/**"], // 🔹 Ignore unnecessary files
      usePolling: true,  // 🔹 Fix file watcher issues in GitHub Codespaces
    },
  },
  resolve: {
    extensions: [".js", ".jsx"], // 🔹 Ensure .jsx files are correctly resolved
  },
  base: "/",
  publicDir: "public",
});
