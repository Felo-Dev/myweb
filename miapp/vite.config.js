import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/myweb/", // <-- cambia si tu repo se llama distinto
  plugins: [react()],
});
