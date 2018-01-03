const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const processEnvDev = require('./process.env.dev')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBaseConf, {
  entry: {
    app: ['./scripts/dev-client.js', './example/app.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': processEnvDev
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  devtool: '#cheap-module-eval-source-map'
})
