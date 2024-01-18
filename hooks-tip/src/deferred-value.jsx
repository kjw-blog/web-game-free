import {
  useState,
  useDeferredValue,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

const DeferredValue = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const deferredName = useDeferredValue(name);
  const result = useMemo(() => deferredName + '의 결과', [deferredName]);

  const onChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  console.log('render', deferredName);

  return (
    <div>
      <div>{count}</div>
      <input value={name} onChange={onChange} />
      {deferredName
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
};

export default DeferredValue;

/**
 * useDeferredValue가 반환하는 값은 리액트가 덜 중요한 값이라고 인식을 하고,
 * 모든 업데이트가 끝난 후 성능적으로 여유가 있을 때 업데이트를 해준다.
 *
 * useTransition의 역할과 비슷하다고 생각하면 될듯
 */
