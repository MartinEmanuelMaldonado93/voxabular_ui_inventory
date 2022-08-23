const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common"); 

/** @type {import('webpack').Configuration} */
const DEV_CONFIG = {
  mode: "development",
  stats: {
    loggingDebug: ["sass-loader"],
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    open: false,
    hot: true,
  },
  devtool: "eval-source-map",
};

module.exports = merge(common, DEV_CONFIG);
