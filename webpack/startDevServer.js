const webpack = require("webpack");
var path = require("path");
const webpackDevServer = require("webpack-dev-server");

const wpdevconfig = require("../config/webpack.dev.config");
const devServerCnf = require("../config/webpack.dev.devserver");

const compiler = webpack(wpdevconfig);

const server = new webpackDevServer(compiler, devServerCnf);

let port = process.env.PORT || 8080;

server.listen(port, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log("Express app is listening on port " + port + ". Visit it at http://localhost:" + port + " ");
    if (result) {
        console.log(result)
    }
})