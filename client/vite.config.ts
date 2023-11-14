/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path'


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') }
        ],
    },
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