import PropTypes from 'prop-types';

function UserGreeting({ isLoggedIn = true, username = 'guest' }) {
  // NOTE: 1. if~else문 활용
  // if (props.isLoggedIn) {
  //   return <h2>Welcome {props.username}</h2>;
  // } else {
  //   return <h2>Please log in to continue</h2>;
  // }

  const welcomeMessage = (
    <h2 className='welcome-message'>Welcome {username}</h2>
  );

  const loginPrompt = (
    <h2 className='login-prompt'>Please log in to continue</h2>
  );

  // NOTE: 2. 물음표 연산자 활용
  return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;
