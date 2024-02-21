import UserGreeting from './UserGreeting';

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username='Suzy' />
      <UserGreeting />
    </>
  );
}

export default App;
