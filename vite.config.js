import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Simplified for the client folder
    },
  },
  root: path.resolve(__dirname, "./"), // Look in the current folder
  build: {
    outDir: "dist", // Keep it inside the project folder
    emptyOutDir: true,
  },
});