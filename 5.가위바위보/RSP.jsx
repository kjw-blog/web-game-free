import React, { Component } from 'react';

// 클래스 컴포넌트
// constructor -> render -> ref -> componentDidMount ->
// (state/props 바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// (부모 컴포넌트에서 해당 컴포넌트가 사라질 때 -> componentWillUnmount) -> 소멸

class RSP extends Component {
  state = {
    result: '',
    score: 0,
    imgCoord: 0,
  };

  // 처음 render가 실행돼서 JSX문이 DOM에 붙었을 때 실행
  componentDidMount() {}

  // 리렌더링 후에 실행
  componentDidUpdate() {}

  // 컴포넌트가 제거되기 전에 실행
  componentWillUnmount() {}

  render() {
    const { result, score, imgCoord } = this.state;

    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        <div>
          <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={() => onClickBtn('가위')}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={() => onClickBtn('보')}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
