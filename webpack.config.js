var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "dist/murphy-event-widget.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      }
    ]
  },
  plugins: [
     new ExtractTextPlugin("dist/murphy-event-widget.css")
  ]
}
