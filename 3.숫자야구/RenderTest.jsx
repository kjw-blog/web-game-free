import React, { PureComponent } from 'react';

// PureComponent는 이전 강의에서 설명한 shouldComponentUpdate가 자동으로 적용된 컴포넌트이다.
// 단점: 객체나 배열같은 참조 타입은 판단하기 어려워함
class Test extends PureComponent {
  state = {
    counter: 0,
    array: [],
  };

  onClick = () => {
    this.setState((prevState) => {
      return {
        array: [...prevState.array, 1],
      };
    });
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
