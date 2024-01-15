import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        // 무작위로 섞는 작업(한번만 실행)
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answer">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';

                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }

                if (answerState === 'correct' || answerState === 'wrong' && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                    <button 
                        onClick={() => onSelect(answer)} 
                        className={cssClass} 
                        disabled={answerState !== ''}
                    >
                        {answer}
                    </button>
                    </li>
                );
            }
                
        )}
        </ul>
    );
}