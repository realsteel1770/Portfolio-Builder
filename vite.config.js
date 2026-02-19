import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // This tells Vite: when you see "@", look in "client/src"
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  preview: {
    // This allows Render to display your site
    allowedHosts: ["portfolio-builder-cva8.onrender.com"],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});