import development from './development';
import production from './production';

let config = {};

switch (process.env.NODE_ENV) {
    case 'production':
    case 'prod':
        config = Object.assign({}, development);

    case 'development':
    case 'dev':
        config = Object.assign({}, development);

    default:
        config = Object.assign({}, development);
}

export default config;