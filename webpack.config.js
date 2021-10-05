
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: true,
          //   },
          // }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", '.tsx', '.ts'],
  },
  output: {
    // path: path.resolve(__dirname, "public/dist/"),
    path : path.join(__dirname, "public/dist"),
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist/',
  },
  devServer: {
    // contentBase
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};