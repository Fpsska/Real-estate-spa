import { resolve } from 'path';

import { defineConfig, type UserConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import reactPlugin from '@vitejs/plugin-react';

// /. imports

const getPlugins = (
    mode: UserConfig['mode'] = 'development'
): UserConfig['plugins'] => {
    const isMinifyMode = ['production', 'docker'].includes(mode);
    const isDevMode = mode === 'development';

    const plugins: UserConfig['plugins'] = [reactPlugin()];

    if (isDevMode) {
        plugins.push({
            name: 'watch-app-config',
            configureServer(server) {
                const path = 'public/config.js';
                server.watcher.add(path);
                server.watcher.on('change', (path) => {
                    if (path.endsWith(path)) {
                        server.ws.send({ type: 'full-reload' });
                    }
                });
            }
        });
    }

    if (isMinifyMode) {
        plugins.push(
            ViteMinifyPlugin({
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true,
                removeComments: true
            })
        );
    }

    return plugins;
};

export default defineConfig(({ mode }): UserConfig => {
    const isDockerMode = mode === 'docker';

    return {
        base: !isDockerMode ? '/real-estate-spa' : undefined,
        server: {
            port: 3000,
            open: true
        },
        build: {
            outDir: 'build',
            emptyOutDir: true,
            rollupOptions: {
                input: [resolve(__dirname, 'index.html')],
                output: {
                    entryFileNames: 'assets/scripts/[name]-entry.js',
                    chunkFileNames: 'assets/scripts/chunks/[name]-[hash].js',
                    assetFileNames: ({ names }) => {
                        const fileName = names[0];

                        if (/\.css$/.test(fileName)) {
                            return 'assets/css/[name]-[hash][extname]';
                        }

                        if (/\.(gif|jpe?g|png|svg)$/.test(fileName)) {
                            return 'assets/images/[name]-[hash][extname]';
                        }

                        if (/\.(ttf|woff|woff2|eot|otf)$/.test(fileName)) {
                            return 'assets/fonts/[name]-[hash][extname]';
                        }

                        return 'assets/[name]-[hash][extname]';
                    }
                }
            }
        },
        plugins: getPlugins(mode)
    };
});
