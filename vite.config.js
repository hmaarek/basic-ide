import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ensure ESM syntax is used
export default defineConfig({
  plugins: [react()],
  root: "./src",  // Make sure Vite serves from `src`
  build: {
    outDir: "../dist",
  },
  server: {
    port: 5173,
    open: true,
  },
});
