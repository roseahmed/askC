import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures relative pathing
  build: {
    assetsDir: "static", // Changing 'assets' to 'static' avoids GitHub's folder filters
    outDir: "dist",
  },
});
