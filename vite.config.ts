import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`
      }
    }
  },
  server: {
    https: {
      key: "./localhost+mac-key.pem",
      cert: "./localhost+mac.pem",
    },
    port: 4310,
  },
});