import express from 'express';
import path from 'path';
import compression from 'compression';
import morgan from 'morgan';

import IndexRoutes from './routes/index';

module.exports = () => {
    const app = express();
    const PATHS = {
        public: path.join(__dirname, '../public'),
        dist: path.join(__dirname, '../dist'),
    };

    app.set('view engine', 'ejs');
    app.set('views', PATHS.public);

    app.use(compression());
    app.use(morgan('dev'));
    app.use(express.static(PATHS.public));
    app.use(express.static(PATHS.dist));

    app.use('/', IndexRoutes);

    return app;
};