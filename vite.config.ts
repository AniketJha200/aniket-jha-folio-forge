import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ghPages from "vite-plugin-gh-pages";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/aniket-jha-folio-forge/", // 👈 Add your repo name here
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ghPages(),                      // 👈 Include ghPages plugin here
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lovable-tagger'],
  },
}));