const _ = require('lodash')
const path = require('path')
const pkg = require('../package.json')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

const libraryName = _.upperFirst(_.camelCase(pkg.name.replace('@hekr/', '')))

module.exports = {
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
  performance: {
    hints: false
  },

  target: 'web',
  stats: 'normal'
}
