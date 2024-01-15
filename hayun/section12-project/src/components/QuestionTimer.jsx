import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
        // 두 개의 속성(함수이지만)이 있기 때문에 의존성 배열O
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
        // 의존성에는 속성과 상태값만 추가하는데 이 Effect 함수에서는 둘 다 사용X -> 빈 의존성 배열.
    }, []);

    return (
        <progress 
            id="question-time" 
            max={timeout} 
            value={remainingTime} 
            className={mode} 
        />
    );
}