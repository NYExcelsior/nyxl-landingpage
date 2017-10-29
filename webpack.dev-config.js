const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        'main': './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true
            }
        }, {
            test: /\.css$|\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        // minimize: true,
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }, {
            // test: /\.gif($|\?)|\.png($|\?)|.jpe?g($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            test: /\.gif($|\?)|\.png($|\?)|.jpe?g($|\?)/,
            loader: 'url-loader'
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.otf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            // loader: 'url-loader?limit=50&publicPath=../&name=fonts2/[name]-[hash].[ext]&outputPath=www/fonts/'
            loader: 'url-loader?limit=50&name=fonts/[name].[ext]'
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new WebpackNotifierPlugin({
            alwaysNotify: true
        }),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin({
            filename: '[name]-[hash].css',
            // filename:  (getPath) => {
            //   return getPath('test/[name]');
            // },
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devtool: 'eval'
};