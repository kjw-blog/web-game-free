const path = require('path');

module.exports = {
  // webpack 설정의 이름
  name: 'word-relay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게?
  resolve: {
    // app에서 .js나 .jsx를 찾음
    // entry app 의 './client' 가 .js 나 .jsx 확장자로 존재하는지 확인함
    extensions: ['.js', '.jsx'],
  },

  //   입력 (client.jsx 컴포넌트의 하위 컴포넌트는 추가할 필요 없음)
  entry: {
    app: ['./client'],
  },

  //   출력 (html 파일로 보내는것?)
  output: {
    // 현재 폴더 '__dirname' 와 dist 경로를 합쳐줌
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
