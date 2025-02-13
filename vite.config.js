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
      ignored: ["**/node_modules/**", "**/dist/**", "**/.git/**"],
      usePolling: true,
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  base: "/"
});
