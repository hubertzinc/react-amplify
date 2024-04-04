import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: "./localhost+home-key.pem",
      cert: "./localhost+home.pem",
    },
    port: 4310,
  },
});