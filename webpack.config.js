const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");7
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
        {
            test: /\.(s*)css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              "css-loader",
              "sass-loader",
            ],
          },
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new HtmlWebpackPlugin({
      title: "Challenge by Nicolas Olmos",
      template:"./index.template.html",
      inject: 'body',
    }),
  ],
};
