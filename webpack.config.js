/* global __dirname, require, module */

const webpack = require('webpack');
// const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

const libraryName = pkg.name;

const plugins = [];
let outputFile;

if (env === 'build') {
  // plugins.push(new UglifyJsPlugin({
  //   minimize: true
  // }));
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

const config = {
  entry: path.join(__dirname, '/src/index.js'),
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // compress: {}
      })
    ]
  },
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins
};

module.exports = config;
