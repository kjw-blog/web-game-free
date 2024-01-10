const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('햄버거');
  const [result, setResult] = useState('');

  const inputRef = useRef(null);

  onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === e.target.children.word.value[0]) {
      setWord(e.target.children.word.value);
      setResult('딩동댕');
      e.target.children.word.value = '';
    } else {
      setResult('땡');
      e.target.children.word.value = '';
    }

    inputRef.current.focus();
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input id="word" ref={inputRef} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
