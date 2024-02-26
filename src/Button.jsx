function Button() {
  let count = 0;
  const handleClick = (name) => {
    count++;
    if (count < 3) {
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me`);
    }
  };

  return <button onClick={() => handleClick('suzy')}>Click me🧡</button>;
}

export default Button;
