/* global __dirname */
var fs = require('fs');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var config = require('./config');
var indexHtmlPath = path.resolve(__dirname, './src/index.html');

var webpackConfig = {
    mode: config.NODE_ENV,
    entry: {
        main: [
            './src/index.ts',
            './src/index.scss'
        ]
    },
    output: {
        path: config.BUILD_PATH,
        filename: '[name].js',
        publicPath: '/',
        pathinfo: false
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json')
                        }
                    }
                ],
                include: [
                    path.join(__dirname, 'src')
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader'
                    }
                ],
                exclude: [
                    indexHtmlPath
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    config.dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    config.dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: config.dev
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts/',
                        publicPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules']
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: false
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name][id].css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(config.env)
        }),
        new HtmlWebpackPlugin({
            template: indexHtmlPath,
            inject: true,
            minify: false
        })
    ]
};

if (config.DEV_MODE) {
    webpackConfig.devtool = 'source-map';
    webpackConfig.entry.main.unshift('webpack-hot-middleware/client?reload=true');
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}
else {
    webpackConfig.plugins.unshift(
        new CleanWebpackPlugin(['build'])
    );
}

module.exports = webpackConfig;
