const webpackConfig = require('./webpack.config');
const path = require('path');
const argv = require('yargs').argv;

module.exports = config => {
    config.set({
        basePath: '',

        frameworks: [
            'mocha',
            'chai',
        ],

        files: [
            'webpack.tests.config.js',
        ],

        preprocessors: {
            'webpack.tests.config.js': [
                'webpack',
                'sourcemap',
            ],
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline',
            },

            filename: file => {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },

            sourceFileName: file => {
                return files.originalPath;
            },
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true,
        },

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-sourcemap-loader',
        ],

        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhnatomJS'],
        singleRun: !argv.watch,
    });
};