import Student from './Student';

function App() {
  return (
    // NOTE: 문자열이 아닌 경우 중괄호로 묶어야함
    <>
      <Student name='Spongebob' age={30} isStudent={true} />
      <Student name='Patrick' age={42} isStudent={false} />
      <Student name='Squidward' age={50} isStudent={false} />
      <Student name='Sandy' age={10} isStudent={true} />
      <Student name='Larry' />
    </>
  );
}

export default App;
