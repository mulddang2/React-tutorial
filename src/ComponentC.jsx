import { useContext } from 'react';
import ComponentD from './ComponentD';
import { UserContext } from './ComponentA';

function ComponentC() {
  const userName = useContext(UserContext);
  return (
    <div className='box'>
      <h1>ComponentC</h1>
      <h2>{`ComponentA의 정보를 나도 알려줘 ${userName}`}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
