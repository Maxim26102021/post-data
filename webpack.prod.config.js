const path = require('path');
const {
    VueLoaderPlugin
} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/i,
                use: [`style-loader`, MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            {   
                test: /\.css$/,
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: path.resolve(__dirname, "postcss.config.js"),
                      },
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    },
                    esModule: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: 'defaults'
                        }]
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.json',
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true,
                }
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            title: 'Тест'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new VueLoaderPlugin(),
    ]
};