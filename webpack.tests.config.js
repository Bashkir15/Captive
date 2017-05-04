require('babel-polyfill');

import chai from 'chai';

const context = require.context('./tests', true, /\.spec\.js$/);
context.keys().forEach(context);