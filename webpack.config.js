module.exports = {

  entry: './src/js/app.js',
  output: {
    path: './bin/js',
    filename: 'app.bundle.js',
    publicPath: '/bin/js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  devServer: {
    inline: true
  }

};
