import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  // setInterval이 계속해서 렌더링되는 현상을 막기 위한 useEffect()
  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []); // 의존성이 따로 필요없음.
  

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  )
}