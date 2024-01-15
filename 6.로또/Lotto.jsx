import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);

  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  // 계산식이 복잡한 값은 useMemo로 메모이제이션 할 수 있다.
  // 리렌더링 될 때 dependencies에 값이 변경되지 않으면 값을 새로 계산하지 않고 저장해둔걸 사용함
  const lottoNumbers = useMemo(() => getWinNumbers(), []);

  const [winBalls, setWinBalls] = useState([]);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  // const [winNumbers, setWinNumbers] = useState(getWinNumber); // 이렇게 써도 useMemo와 같은 동작을 기대할 수 잇음
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  // useCallback으로 함수 자체를 메모이제이션 할 수 있다.
  // 리렌더링 될 때 dependencies에 값이 변경되지 않으면 함수를 새로 만들지 않고 저장해둔걸 사용함
  // 자식 컴포넌트에 해당 함수를 props로 넘길 때 useCallback을 꼭 해줘야한다.
  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);

    timeouts.current = [];
  }, [winNumbers]);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }

    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);

    return () => {
      timeouts.current.forEach((v) => clearTimeout(v));
    };
  }, [timeouts.current]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}

      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;
