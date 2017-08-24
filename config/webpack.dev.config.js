//Konfiguration für development

const webpack = require("webpack");
const path = require("path");
const webpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    devtool: "source-map",
    entry: require("./webpack.dev.entry"),
    output: {
        filename: '[name].js',
        path: path.resolve("./public/scripts/"),

        //für dev:
        publicPath: "http://localhost:8080/"//"http://localhost:8080/"
    },
    resolve: require("./webpack.resolve"),
    module: require("./webpack.rules"),
    externals:require("./webpack.externals"),
    // devServer:require("./webpack.dev.devserver"),
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpackNotifierPlugin({alwaysNotify:true}),
    ]
}

