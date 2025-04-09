import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  proxy: {
    "/api": {
      target: "https://chat-app-mern-and-socket-io.onrender.com",
      changeOrigin: true,
      secure: false,
      credentials: true,
    },
  },
});
