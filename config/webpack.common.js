const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "../src/index.ts",
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, "../dist"),
        // filename: '[name].[contenthash].js',
        filename: "main.js",
        clean: true,
        assetModuleFilename: "[name][ext]",
    }, 
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: "/node_modules",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader",],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ 
                    MiniCssExtractPlugin.loader,
                    "css-loader",
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
                test: /\.(png|svg|jpg|gif|jpeg)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".tsx", ".ts"],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "../pages/index.html" }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    devtool: "source-map",
    performance: {
        maxAssetSize: 500_000,
        hints: false,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: "/node_modules",
            }),
        ],
    },
};
