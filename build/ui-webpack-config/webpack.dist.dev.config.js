var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge')
var webpackBaseConfig = require('../webpack.base.conf.js');

process.env.NODE_ENV = 'production'
console.log(webpackBaseConfig)
module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/dist/',
        filename: 'chaos-ui.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});