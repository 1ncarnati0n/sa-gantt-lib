import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src/lib'],
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'SaGanttLib',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'tailwindcss'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    tailwindcss: 'tailwindcss'
                },
                banner: '"use client";',
            },
        },
    },
});
