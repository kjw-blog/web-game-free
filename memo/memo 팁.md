react의 memo HOC를 사용할 때 변경되는 props를 확인할 때 아래와 같이 넣으면 편하다

```javascript
const ref = useRef([]);

useEffect(() => {
  console.log(
    props1 === ref.current[0],
    props2 === ref.current[1],
    props3 === ref.current[2]
  );
  ref.current = [props1, props2, props3];
}, [props1, props2, props3]);
```
