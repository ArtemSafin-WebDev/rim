const path = require('path')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  entry: {
    app: './src/js/main.js',
    redtagChunk: './src/js/redtag.js',
    franchiseChunk: './src/js/franchise.js',
    driveChunk: './src/js/drive.js',
    partnerChunk: './src/js/partner.js',
    chiyoChunk: './src/js/chiyo.js',
    drimsChunk: './src/js/drims.js',
    citybookChunk: './src/js/citybook.js',
    citiesChunk: './src/js/cities.js',
    modalChunk: './src/js/collaboration-modal.js',
  },
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules(?![/|\\](dom7|swiper))/],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  optimization: {
    usedExports: true,
  },
  mode: 'development',
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru']
    })
  ]
}
