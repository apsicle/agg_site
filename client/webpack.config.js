const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            { test: /\.(png|jpg|gif)$/, use: 'file-loader' },
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
        // https: true,
    },
    resolve: {
        // modules: [path.resolve(__dirname, './src'), 'node_modules'],
        // extensions: ['.js', '.jsx', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src')
        }
    },
};