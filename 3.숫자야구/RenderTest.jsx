import React, { Component } from 'react';

class Test extends Component {
  state = {
    counter: 0,
  };

  // 리액트는 state가 변할때 말고도 setState가 실행될 때도 리렌더링 하기때문에
  // 불필요한 리렌더링을 막기위해 아래와 같이 설정해준다
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 현재 counter와 변경될 state의 counter가 다르면 리렌더링함
    if (this.state.counter !== nextState.counter) {
      return true;
    }

    return false;
  }

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log('렌더링', this.state);
    return (
      <di>
        <button onClick={this.onClick}>클릭</button>
      </di>
    );
  }
}

export default Test;
