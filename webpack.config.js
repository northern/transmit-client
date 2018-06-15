
var path = require('path')
var webpack = require("webpack")

module.exports = {
  target: 'web',
  devtool: '#source-map',
  entry: [
    path.resolve(__dirname, "src/index.js"),
  ],
  output: {
    path: path.resolve(__dirname, "public/assets"),
    filename: "client.js",
    sourceMapFilename: 'client.map'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: {
        test   : /node_modules/,
      },
      query: {
        cacheDirectory: "/tmp",
        presets: ['env', 'stage-2', 'react']
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }, {
      test: /\.svg$/,
      use: [
        "babel-loader", {
          loader: "react-svg-loader",
          options: {
            svgo: {
              plugins: [{
                removeTitle: false
              }],
              floatPrecision: 2
            }
          }
        }
      ]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    })
  ],
  watchOptions: {
    poll: 50
  },
}
