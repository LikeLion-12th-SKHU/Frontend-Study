import { useState, useRef } from "react";

import ResultModal from "./ResultModal";

// 함수 바깥에서 선언. -> 재생성되지 않음.
// 하지만 1초 도전과 5초 도전을 함께하면 하나가 리액트 내에서 자동으로 버려짐. -> 해결 = useRef
// let timer;

export default function TimerChallenge({ title, targetTime }) {
    // 상태 값들과 달리 재실행되어도 이 값은 유실되지 않음.
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    // let timer; // 함수가 재실행되면서 변수도 새로 생성됨. -> 타이머 작동 오류.

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal 
                ref={dialog} 
                targetTime={targetTime} 
                remainingTime={timeRemaining}
                onReset={handleReset} 
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}