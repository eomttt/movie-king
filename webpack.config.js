const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const isDev = process.env.WEBPACK_ENV === 'development';
const isStaging = process.env.WEBPACK_ENV === 'staging';

// eslint-disable-next-line no-nested-ternary
let dotenvPath = '.env.prod';
if (isDev) {
  dotenvPath = '.env.dev';
} else if (isStaging) {
  dotenvPath = '.env';
}

const config = {
  mode: (isDev || isStaging) ? 'development' : 'production',
  devtool: (isDev || isStaging) ? 'eval' : 'cheap-module-source-map',
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
      path: dotenvPath,
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
