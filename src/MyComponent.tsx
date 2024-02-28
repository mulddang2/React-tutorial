import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');


/** NOTE: useEffect 의 이점
 * 1. 해당 코드가 정확히 언제 실행되는지 알 수 있다. (마운트 시에 실행하는지, 모든 렌더링 중에 실행되는 것인지)
 * 2. 특정 상황에서만 일부 코드를 수행할 수 있는 옵션이 있다.
 * 
 */


  useEffect(() => {
    // count가 변경될 때마다(count를 더하든, 빼든) 문서 제목이 변경됨
    document.title = `Count: ${count} ${color}`;

    // DOM에서 이 컴포넌트 제거할 때, 반환할 수 있다. 정리하는 것
    return () => {

    }
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === 'green' ? 'red' : 'green'));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
export default MyComponent;
