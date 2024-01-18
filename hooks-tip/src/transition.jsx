import { useCallback, useEffect, useState, useTransition } from 'react';

const Transition = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('');
  const [name, setName] = useState('');
  const [loading, startTransition] = useTransition();

  const onChange = useCallback((e) => {
    setName(e.target.value);

    startTransition(() => {
      setResult(e.target.value + '의 결과');
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  console.log('render ', name);

  return (
    <div>
      <div>{count}</div>
      <input value={name} onChange={onChange} />
      {loading ? <div>로딩중...</div> : null}
      {name
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
};

export default Transition;

/**
 * useTransition은 useLayoutEffect와 다르게 실행순서를 뒤로 미룬다.
 *
 * const [loading,startTransition] = useTransition()
 *
 * loading으로 해당 함수의 값이 업데이트 되는동안 로딩상태를 알려준다.
 * startTransition 함수로 나중에 업데이트 되어야할것을 구분해준다.
 *
 * onChange 함수에서 setName은 변경 즉시 업데이트되고 setResult는 후순위로 업데이트된다.
 * input의 업데이트 같은 중요도 높은 부분을 startTransition에 넣게되면 입력이 이상하게 됨
 *
 *
 */
