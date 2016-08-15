var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader:'babel',
            query: {
                presets: ['es2015', 'react']
            },
            excludes: /node_modules$/
        }]
    },
    plugins: [
    HtmlWebpackPluginConfig,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    ]
};

