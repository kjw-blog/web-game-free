import React, { useRef, useState } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);

  // useRef는 요소에 접근하는 것 뿐만아니라 함수 컴포넌트에서 this의 역할을 한다.
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  // state와 ref의 차이는 state가 변하면 리렌더링을 하지만,
  // ref가 바뀌면 리렌더링을 하지 않는다.

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요!');

      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');

        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');

      clearTimeout(timeout.current);
    } else if (state === 'now') {
      endTime.current = new Date();

      setState('waiting');
      setMessage('클릭해서 시작하세요!');
      setResult((prevResult) => [
        ...prevResult,
        endTime.current - startTime.current,
      ]);
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간: {result.reduce((a, c) => a + c) / result.length}
          ms
        </div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
