const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const config = {
    mode: 'development',

    devtool: 'eval-source-map-inline',

    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            '@babel/polyfill',
            './index.jsx',
            './assets/scss/main.scss',
        ],
    },

    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build'),
        publicPath: '',
        crossOriginLoading: 'anonymous',
    },

    context: resolve(__dirname, 'src'),

    target: 'web',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'build'),
        publicPath: '/',
        historyApiFallback: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/png',
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/octet-stream',
                            name: 'fonts/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/svg+xml',
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: resolve(__dirname, 'node_modules'),
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
        runtimeChunk: {
            name: 'manifest',
        },
        minimize: false,
    },

    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            // favicon: "./assets/img/favicon.ico",
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    node: {
        fs: 'empty',
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      alias: {
          app: resolve(__dirname, 'src'),
      },
    },
};

module.exports = config;
