const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  plugins: [new webpack.NamedModulesPlugin()],
  serve: {},
}
