const path = require('path');
const webpack = require('webpack');

const PATHS = {
    public: path.join(__dirname, 'public'),
    dist: path.join(__dirname, 'dist'),
    test: path.join(__dirname, 'test'),
};

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: path.join(PATHS.app, 'index.js'),
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash:8].js',
        publicPath: '/',
        path: path.join(PATHS.dist),
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        plugins: [
                            'transform-class-properties',
                            'transform-decorators-legacy',
                            'syntax-dynamic-import',
                        ],
                    },
                },
            },

            {
                test: /\.json$/,
                use: 'json-loader',
            },

            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.json', '.sass', '.css'],
        alias: {
            styles: path.resolve('./public/static/styles'),
            images: path.resolve('./public/static/images'),
            scripts: path.resolve('./public/scripts'),     
        },
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'error-only',
        host: 'localhost',
        port: 3000,
        proxy: {
            '*': 'http://localhost:8000',
        },
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};