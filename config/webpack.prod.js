const common = require("./webpack.common");
const { merge } = require("webpack-merge");

/** @type {import('webpack').Configuration} */ 
const PROD_CONFIG = {
    mode: "production",
    optimization: {
        splitChunks:{
            chunks:"all",
        }
    }
};
module.exports = merge(common, PROD_CONFIG);