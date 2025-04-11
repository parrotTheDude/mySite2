import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (/\.(ttf|woff2?|eot)$/.test(assetInfo.name)) {
                        return 'fonts/[name][extname]';
                    }
                    return 'assets/[name][extname]';
                },
            },
        },
    },
});