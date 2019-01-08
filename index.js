var express = require('express'),
    app = express(),
    http = require('http'),
    path = require('path'),
    server = http.createServer(app),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./config'),
    webpackConfig = require('./webpack.config'),
    compiler;

if (config.DEV_MODE) {
    compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        inline: true,
        quiet: false,
        noInfo: true,
        stats: { colors: true },
        historyApiFallback: {
            index: 'index.html'
        }
    }));

    app.use(webpackHotMiddleware(compiler, {
        log: console.log, // eslint-disable-line no-console
    }));
}
else {
    app.use(express.static(webpackConfig.output.path, {
        index: './index.html'
    }));
}

app.get('*', function (req, res) {
    if (config.DEV_MODE) {
        compiler.outputFileSystem.readFile(path.resolve(__dirname, './dist/index.html'), 'utf8', function (err, data) {
            res.send(data);
        });
    }
    else {
        res.sendFile(path.resolve(webpackConfig.output.path, 'index.html'));
    }
});

server.listen(config.PORT, function () {
    console.log('Listening on port:', config.PORT, '\nENV:', config.NODE_ENV);
});
