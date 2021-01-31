const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'inline-source-map' : 'cheap-module-source-map',
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new TerserPlugin({
      cache: true,
      parallel: true,
      terserOptions: {
        warnings: false,
        compress: {
          warnings: false,
          unused: true,
        },
        ecma: 6,
        mangle: true,
        unused: true,
      },
      sourceMap: true,
    }),
    new Dotenv({
      path: isDev ? '.env.dev' : '.env',
    }),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = config;
