const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
              options: {
                presets: ['@babel/react', '@babel/env']
              }
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
    ...
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
