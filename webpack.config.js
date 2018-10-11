const webpack = require('webpack')
const path = require('path')

const config = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devtool: 'source-map',
    mode: 'production'
}

module.exports = config