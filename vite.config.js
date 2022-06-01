const buildingForProduction = process.env.BUILD_MODE === 'production';

export default {
    build: {
        manifest: true,
        rollupOptions: {
            input: './js/main.js'
        },
        outDir: 'static/bundle',
        assetsDir: '', // optional
        minify: buildingForProduction // optional
    },

    publicDir: false,
    clearScreen: false
}
