1. Hooks는 항상 최상위에서만 사용할 수 있다.

```javascript
const Component = () => {
  const [state, setState] = useState(''); // O

  if (true) {
    const [innerState, setInnerState] = useState(''); // X
  }

  useEffect(() => {
    const [effectState, setEffectState] = useState(''); // X
  }, []);

  return <></>;
};
```

2. 클래스 컴포넌트는 componentDidUpdate 함수 하나에서 업데이트 처리를 해줘야하지만
   함수 컴포넌트는 useEffect를 여러개 만들 수 있다.

3. useEffect에서 componentDidMount 단계를 생략할 때 방법

```javascript
const mounted = useRef(false);

useEffect(() => {
  if (!mounted.current) {
    /** componentDidMount 단계 */
    mounted.current = true;
  } else {
    /** componentDidUpdate 단계 */
  }
}, []);
```
