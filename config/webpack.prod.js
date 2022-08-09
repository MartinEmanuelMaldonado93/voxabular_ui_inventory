const common = require("./webpack.common");
const { merge } = require("webpack-merge");

/** @type {import('webpack').Configuration} */
const PROD_CONFIG = {
    mode: "production",
    output:{
        filename: '[name].[contenthash].js',
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    devtool: "source-map",
};

module.exports = merge(common, PROD_CONFIG);
