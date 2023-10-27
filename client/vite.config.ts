/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
        css: true,
        // resolve: {
        //   alias: {
        //     "@": path.resolve(__dirname, "./src"),
        //   },
        // },
    },
});