import React, { Component } from 'react';

function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {[
            { fruit: '사과', taste: '맛있다.' },
            { fruit: '감', taste: '떫다.' },
            { fruit: '귤', taste: '시다.' },
            { fruit: '포도', taste: '달다.' },
            { fruit: '밤', taste: '맛없다.' },
            { fruit: '바나나', taste: '제일맛있다.' },
          ].map((v) => {
            return (
              <li key={v.fruit + v.taste}>
                {/** key는 반드시 고유한 값이어야함 index를 사용할 경우 성능최적화에 좋지 않기때문에 권장 X */}
                <b>{v.fruit}</b> - <span>{v.taste}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
