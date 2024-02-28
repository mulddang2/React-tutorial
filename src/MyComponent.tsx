/** NOTE: useEffect 의 이점
 * 1. 해당 코드가 정확히 언제 실행되는지 알 수 있다. (마운트 시에 실행하는지, 모든 렌더링 중에 실행되는 것인지)
 * 2. 특정 상황에서만 일부 코드를 수행할 수 있는 옵션이 있다.
 *
 */

// useEffect(function, [dependencies])

// 1. useEffect(() => {})                 // 리렌더링 될 때마다 실행
// 2. useEffect(() => {}, [])             // 마운트(처음 나타났을 때) 될 때, 한번만
// 3. useEffect(() => {}, [value])        // 마운트 시 + 값이 변할 때마다 실행

// USES
// #1 이벤트리스너
// #2 DOM 조작
// #3 구독 (실시간 업데이트)
// #4 API로 부터 데이터 가져올 때(Fetching Data)
// #5 컴포넌트 언마운트 시, Clean up!

import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('EVENT LISTENER ADDED');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('EVENT LISTENER REMOVED');
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}
export default MyComponent;
