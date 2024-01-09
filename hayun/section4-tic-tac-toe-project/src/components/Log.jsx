export default function Log({ turns }) {
    return (
        // 자바스크립트 동적 텍스트 넣는 방법 => ``(백틱)+${}
    <ol id="log">
        {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
            {/* 실제 로그 메시지 - line 8 */}
            {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
        ))}
    </ol>
    );
}