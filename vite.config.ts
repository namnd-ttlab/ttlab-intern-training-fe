import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@": path.resolve(__dirname, "./src/"),
      // add other aliases if needed
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
