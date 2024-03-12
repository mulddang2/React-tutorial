import { useEffect, useRef } from 'react';
// useRef를 사용하면, 해당 값이 변경될 때 컴포넌트가 렌더링 되지 않는다.
// useRef: 렌더링 없이 값 변하고 싶을 때 사용
function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log('렌더링이 됨!');
  });

  function handleClick1() {
    // 클릭할때, input에 포커스 잡힘
    inputRef1.current.focus();
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
    inputRef1.current.style.backgroundColor = 'yellow';
  }
  function handleClick2() {
    // 클릭할때, input에 포커스 잡힘
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = 'yellow';
  }
  function handleClick3() {
    // 클릭할때, input에 포커스 잡힘
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = 'yellow';
  }
  return (
    <>
      <button onClick={handleClick1}>Click me 1</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3</button>
      <input ref={inputRef3} />
    </>
  );
}

export default MyComponent;
