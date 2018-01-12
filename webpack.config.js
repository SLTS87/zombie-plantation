const path = require('path');
const extr = require('extract-text-webpack-plugin');
const sassPlugin = new extr('css/sass-style.css');

module.exports = {
    entry: ['./js/script.js', './scss/style.scss'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [
            { test: /\.scss$/, use: sassPlugin.extract(['css-loader', 'sass-loader'])}
        ]
    },
    plugins: [
        sassPlugin
    ]
}