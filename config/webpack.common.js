const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "../src/",
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, "../dist"),
        // filename: '[name].[contenthash].js',
        filename: "main.js",
        clean: true,
        assetModuleFilename: "[name][ext]",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: "/node_modules",
            },
            {
                test: /\.(css|sass|scss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                // test: /\.(png|svg|jpg|gif|jpeg)$/i,
                test: /\.png$/i,
                type: "asset",
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "../pages/index.html" })],
    resolve: {
        extensions: [".js", ".json", ".ts"],
    }, 
    performance: {
        maxAssetSize: 500_000,
        hints: false,
    }, 
};
