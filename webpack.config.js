module.exports = {
  //input setup
  entry: [
    './src/index.jsx',
  ],
  // output setup
  output: {
    path: __dirname,
    filename: 'bundle.js'
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
  devtool: '#eval-source-map',
  
  // Check for file extensions
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
