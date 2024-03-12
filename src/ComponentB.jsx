import { UserContext } from './ComponentA';
import ComponentC from './ComponentC';
import { useContext } from 'react';

function ComponentB() {
  const user = useContext(UserContext);
  return (
    <div className='box'>
      <h1>ComponentB</h1>
      <h2>{`ComponentB 안에 컨텍스트A 내용은 ${user}`}</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
