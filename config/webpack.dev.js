const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const DEV_CONFIG = {
    mode: "development",
    output: {
        path: path.join(__dirname, "../dev"),
    }, 
    stats: {
        loggingDebug: ["sass-loader"],
    },
    devServer: {
        port: 9001,
        static: {
            directory: path.join(__dirname, "../dist"),
        },
        open: true,
        compress:true,
        hot:true,
    },
    devtool: false,
};

module.exports = merge(common, DEV_CONFIG);
