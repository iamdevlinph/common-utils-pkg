/* global __dirname, require, module */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const { env } = require('yargs').argv; // use --env with webpack 2
const pkg = require('./package.json');

const libraryName = pkg.name;

const plugins = [];
let outputFile;
let mode;
let optimization;

if (env === 'build') {
  outputFile = `${libraryName}.min.js`;
  mode = 'production';
  optimization = {
    minimizer: [
      new UglifyJsPlugin()
    ]
  };
} else {
  outputFile = `${libraryName}.js`;
  mode = 'development';
}

const config = {
  mode,
  entry: path.join(__dirname, '/src/index.js'),
  devtool: 'source-map',
  optimization,
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
