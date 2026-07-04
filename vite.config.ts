import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import fs from "fs";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    {
      name: "write-redirects",
      closeBundle() {
        try {
          fs.writeFileSync("dist/_redirects", "/* /index.html 200\n");
        } catch (error) {
          console.error("Failed to write _redirects:", error);
        }
      },
    },
  ],
});
