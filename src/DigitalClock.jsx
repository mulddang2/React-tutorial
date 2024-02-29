import { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 렌더링이 끝나는 시점(unmount)에서 타이머를 지운다
    // 실행 중 예상치 못한 동작이 발생할 수 있는 경우 리소스 확보
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    // 시간이 12시 일 때, 0을 쓰고 싶지 않기 때문에
    hours = hours % 12 || 12;

    return `${padAero(hours)}:${padAero(minutes)}:${padAero(
      seconds
    )} ${meridiem}`;
  }

  function padAero(number) {
    // 한자리면 0붙이기
    return (number < 10 ? '0' : '') + number;
  }

  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
