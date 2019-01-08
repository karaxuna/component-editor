var path = require('path');

var config = {};

config.NODE_ENV = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'development';
config.DEV_MODE = config.NODE_ENV === 'development';
config.PORT = process.env.PORT || 8080;
config.BUILD_PATH = path.resolve(__dirname, 'dist');

module.exports = config;
