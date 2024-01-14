import { useEffect, useRef } from 'react';

// 2개 이상의 hooks가 하나의 동작을 위해 만들어졌을떄 커스텀 훅으로 빼는것이
function useInterval(callback, delay) {
  // useRef는 항상 최신 객체를 참조할 수 있다.
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  // callback을 tick으로 감싸지 않고, dependencies에 추가 후 직접 사용하게 되면
  // callback이 변할 때 마다도 setInterval을 다시 해주기 때문에
  // 그 사이에도 딜레이가 생길 수 있다.

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
