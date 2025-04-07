import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  proxy: {
    "/api": {
      target: "http://localhost:5001",
      changeOrigin: true,
      secure: false,
      credentials: true,
    },
  },
  build: {
    outDir: "dist", // make sure this line exists
  },
});
