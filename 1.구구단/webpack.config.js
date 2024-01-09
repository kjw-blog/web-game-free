const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval', // product용은 hidden-source-map으로 소스 암호화 해주는거같음

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: './client',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
