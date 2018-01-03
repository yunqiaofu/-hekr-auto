const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const processEnvProd = require('./process.env.prod')
const webpackBaseConf = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = webpackMerge(webpackBaseConf, {
  entry: {
    auto: './src/index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': processEnvProd
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
  devtool: '#source-map'
})
