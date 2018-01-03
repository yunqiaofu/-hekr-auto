const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const rimraf = require('rimraf')
const webpack = require('webpack')

const webpackProdConf = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rimraf(path.resolve(__dirname, '../dist'), error => {
  if (error) throw error
  webpack(webpackProdConf, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
  })
})
