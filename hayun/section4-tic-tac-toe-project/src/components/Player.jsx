import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName); // 개별 상태 제어
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        // setIsEditing(!isEditing); // => schedules a state update to true
    }

    function handleChange(event) {
      setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';

    if (isEditing) {
      // 이 부분을 통해 사용자가 수정하기 위해 입력한 값을 볼 수 있고 저장도 가능해짐. = 양방향 바인딩
        playerName = <input type="text" required value={playerName} onChange={handleChange} />;
        // btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}