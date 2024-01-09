const path = require('path');
const webpack = require('webpack');

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
              '@babel/preset-env', // 자동으로 옛날 브라우저 지원하는 역할
              {
                // @babel/preset-env의 plugins의 상세설정
                targets: {
                  browsers: [
                    '> 5% in KR', // 한국에서 점유율이 5% 이상인 브라우저를 지원하겠다는 뜻
                    'last 2 chrome versions', // 크롬 최신 버전 2개만 지원하겠다는 뜻

                    // browserslist에서 옵션 확인 가능
                  ],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
