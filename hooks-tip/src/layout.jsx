import { useLayoutEffect, useState } from 'react';

const Layout = () => {
  const [name, setName] = useState('');

  //  브라우저에 그려진 후 동작
  //  useEffect(() => {
  //    setName('강정욱');
  //  }, []);

  // 브라우저에 그려지기 전 동작
  useLayoutEffect(() => {
    setName('강정욱');
  }, []);

  return (
    <div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
    </div>
  );
};

export default Layout;

/**
 * 1. 컴포넌트 첫 render시 name의 값은 '' 이다.
 * 2. "안녕하세요. 입니다" 라고 브라우저 화면에 그려진다.
 * 3. 컴포넌트가 render 된 후 useEffect에서 name의 값이 '강정욱'으로 바뀐다.
 * 4. "안녕하세요. 강정욱입니다."라고 브라우저 화면에 다시 그려진다.
 *
 * 개선
 * useEffect 대신 useLayoutEffect를 사용해서 실행 순서를 앞당긴 뒤
 * 브라우저에 화면이 그려지는 작업 전에 state의 값을 변경시켜준다.
 */
