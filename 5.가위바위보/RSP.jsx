import React, { Component } from 'react';

// 클래스 컴포넌트
// constructor -> render -> ref -> componentDidMount ->
// (state/props 바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// (부모 컴포넌트에서 해당 컴포넌트가 사라질 때 -> componentWillUnmount) -> 소멸

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: '',
    score: 0,
    imgCoord: '0',
  };

  interval;

  // 처음 render가 실행돼서 JSX문이 DOM에 붙었을 때 실행, 비동기 요청을 많이 함
  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }

  // 리렌더링 후에 실행
  componentDidUpdate() {}

  // 컴포넌트가 제거되기 전에 실행, 비동기 요청 정리를 많이 함
  componentWillUnmount() {
    // 컴포넌트가 없어질 때 완료되지 않은 비동기 요청을 처리해주지 않으면
    // 메모리 누수가 생긴다.
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;

    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위,
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보,
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  };

  onClickBtn = (choice) => {
    const { imgCoord } = this.state;

    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      this.setState({
        result: '비겼습니다.',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }

    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 2000);
  };

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
          <button
            id="rock"
            className="btn"
            onClick={() => this.onClickBtn('바위')}
          >
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={() => this.onClickBtn('가위')}
          >
            가위
          </button>
          <button
            id="paper"
            className="btn"
            onClick={() => this.onClickBtn('보')}
          >
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
