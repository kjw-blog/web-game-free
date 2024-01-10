const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('햄버거');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const inputRef = useRef(null);

  onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setResult('딩동댕');
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }

    inputRef.current.focus();
  };

  onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
