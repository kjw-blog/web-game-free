import React, { Component, useState } from 'react';
import Try from './Try';

// this를 사용하지 않는 함수는 컴포넌트 외부에서 사용할 수 있다. 재사용에
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');

  // lazy init
  // 리렌더링 할때마다 getNumbers 함수를 실행하는것을 방지하기 위해 함수 실행결과가 아닌
  // 함수 자체를 초기값으로 넣어준다.
  const [answer, setAnswer] = useState(getNumbers);
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런');
      setTries((prevTries) => [...prevTries, { try: value, result: '홈런' }]);

      alert('게임을 다시 시작합니다!');

      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');

        setValue('');
        // setState에서는 정상적으로 함수의 반환값을 넣어준다.
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        setTries((prevTries) => [
          ...prevTries,
          { try: value, result: `${strike} 스트라이크, ${ball} 볼 입니다.` },
        ]);
        setValue('');
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
        ))}
      </ul>
    </>
  );
};

export default NumberBaseball;

/**
 * 화살표 함수가 아닌 일반 함수를 사용하려면 constructor에 해당 함수를 바인딩 해줘야한다.
 *
 * constructor(props) {
 *  super(props);
 *  this.state = {};
 *  this.onChangeInput = this.onChangeInput.bind(this)
 * }
 *
 * onChangeInput(e) {
 *    this.setState({e.target.value})
 * }
 */
