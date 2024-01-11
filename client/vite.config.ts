import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import path from "path";


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') }
        ],
    },
    // test: {
    //     globals: true,
    //     environment: "jsdom",
    //     setupFiles: "./vitest.setup.ts",
    //     css: true,
    // },
    server: {
        port: 4000,
        proxy: {
            '/api': {
                target: 'http://localhost:4050',
                changeOrigin: true
            },
        },
    },
});