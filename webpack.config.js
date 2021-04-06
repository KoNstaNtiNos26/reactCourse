const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'main.js',
   },
   devServer: {
    historyApiFallback: true,
   },
   module: {
        rules: [
        {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            },
        },
        {
            test: /.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ]
    },
   plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ]
};