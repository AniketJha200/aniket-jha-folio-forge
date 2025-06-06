import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ghPages from "vite-plugin-gh-pages";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), ghPages()];
  
  if (mode === "development") {
    const { componentTagger } = await import("lovable-tagger");
    plugins.push(componentTagger());
  }

  return {
    base: "/aniket-jha-folio-forge/", // 👈 Add your repo name here
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      exclude: ['lovable-tagger'],
    },
  };
});