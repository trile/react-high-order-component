const path = require('path');

module.exports = {
  //input setup
  entry: [
    './src/index.jsx',
  ],

  // output setup
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'public')
  },

  //  setup modules to convert react and es2015
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx?$/
    }]
  },

  // enable source mapping in devmode
  devtool: 'cheap-eval-source-map',

  // Check for file extensions
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
