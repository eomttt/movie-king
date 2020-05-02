const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: './src/index.tsx'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
     {
      test: /\.(ts|tsx)$/,
      use: ['ts-loader'],
      exclude: [/node_modules/],
     }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new UglifyPlugin({
      uglifyOptions: {
        compress: {
          unused: false
        }
      }
    })
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build')
  },

};