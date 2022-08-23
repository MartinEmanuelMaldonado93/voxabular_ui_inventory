const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "../src/index.ts",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "../docs"),
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["lit-css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/i,
        type: "asset/resource",
        generator: {
          outputPath: "./assets",
        },
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
