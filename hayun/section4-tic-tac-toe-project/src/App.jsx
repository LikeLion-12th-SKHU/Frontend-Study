import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // 이 부분은 잘못되지는 않았지만 불필요함. - 동일 내용 반복
  // const [hasWinner, setHasWinner] = useState(false);
  
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[]
    const secondSquareSymbol 
    const thirdSquareSymbol 
  }

  // 버튼이 클릭되었을 때 실행되는 함수
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X'); // 플레이어를 바꿈
    
    // 이전 상태에 기반하여 상태를 변경하고 싶을 때 밑 코드 사용(setGameTurns)
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col:colIndex }, player: currentPlayer }, 
        ...prevTurns
      ];

      return updatedTurns;
    });
  } 

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard 
        onSelectSquare={handleSelectSquare} 
        board = {gameBoard} 
      />
    </div>
    <Log turns={gameTurns} />
  </main>;
}

export default App
