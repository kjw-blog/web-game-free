### Controlled Input (권장)

value에 state값이 들어가있고,  
onChange에 해당 state의 setState 함수가 적용이되는 input

ex)

```javascript
const [value, setValue] = useState('');

<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

### Uncontrolled Input

value와 onChange가 없는 원시적인 형태의 input  
onSubmit에서만 사용할 때 해당 value의 변화 감지가 필요 없으므로 사용하기 좋음
초기값은 defaultValue로 넣음

```javascript
const inputRef = useRef(null);

const onSubmit = (e) => {
  e.preventDefault();

  console.log(e.target.children.word.value);
  console.log(inputRef.current.value);
};

<form onSubmit={onSubmit}>
  <input id="word" defaultValue="초기 단어" ref={inputRef} />
  <button>Submit</button>
</form>;
```
