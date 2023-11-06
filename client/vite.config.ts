/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
        css: true,
    },
    server: {
        port: 4000,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true
            },
        },
    },
});