const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome versions'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    // 핫 리로딩을 제공
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
