

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders: [
          {
              loader: 'react-hot',
              test: /\.jsx?$/,
              include: __dirname + "/src",
          },
          {
              loader: 'babel-loader',
              test: /\.jsx?$/,
              include: __dirname + "/src",
              query: {
                  presets: ['es2015', 'react'],
              },
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          }
      ]
  }
};

module.exports = config;