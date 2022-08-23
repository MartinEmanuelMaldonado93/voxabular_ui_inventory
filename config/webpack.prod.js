const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const Sass = require("sass");

/** @type {import('webpack').Configuration} */
const PROD_CONFIG = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
        chunks: "all",
    },
},
};

module.exports = merge(common, PROD_CONFIG);
