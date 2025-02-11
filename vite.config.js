import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./src",  // Ensure Vite looks for `index.js` in `src`
  build: {
    outDir: "../dist",
  },
  server: {
    port: 5173,
    open: true,
  },
});
