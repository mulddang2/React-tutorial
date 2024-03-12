import { useState, createContext } from 'react';
import ComponentB from './ComponentB';

// 컴포넌트 제공자
// 1. import { createContext } from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}></MyContext.Provider>

// 컴포넌트 프롭스 사용할 애
// 1. import React, { useContext} from 'react;
//    import { MyContext } from './ComponentA.jsx ;
// 2. const value = useContext"(MyContext)

export const UserContext = createContext();
function ComponentA() {
  const [user] = useState('Suzy');

  return (
    <div className='box'>
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      {/* 컴포넌트 A에서 컴포넌트 D까지 넘기기(prop drilling) */}
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
