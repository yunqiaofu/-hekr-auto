const _ = require('lodash')
const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

const libraryName = _.upperFirst(_.camelCase(pkg.name.replace('@hekr/', '')))

module.exports = {
  entry: {
    auto: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: libraryName,
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, '../src')],
        options: {
          formatter: eslintFriendlyFormatter
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV === 'production'
        ? require('./process.env.prod')
        : require('./process.env.test')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../README.md') },
      { from: path.resolve(__dirname, '../package.json') }
    ])
  ],
  devtool: '#source-map',
  performance: {
    hints: false
  },

  target: 'web',
  stats: 'normal'
}
