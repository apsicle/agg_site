const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader'},
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            { test: /\.(png|jpg|gif)$/, use: 'file-loader' },
            { test: /\.scss$/, use: ['vue-style-loader','css-loader', 'sass-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
    ],  
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '~': path.resolve(__dirname, './src/style'),
        }
    },
};