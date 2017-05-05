const config = {
    dev: {
        styles: './public/static/styles/**/*.sass',
        mainSass: './public/static/styles/main.sass',
        css: './public/static/styles'
    },

    prod: {
        styles: './dist/styles',
    }
};

export default config;