import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = { // 기술적 필수는 아니지만 이 애플리케이션을 위해 정의된 일반 상수임을 보여줌.
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [ // 대문자_ => 이 앱을 위한 일반상수
  [null, null, null], // 자바스크립트에서 null은 false로 인식.
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

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return GameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = 
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = 
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = 
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [ players, setPlayers ] = useState({PLAYERS});
  const [gameTurns, setGameTurns] = useState([]);

  // 이 부분은 잘못되지는 않았지만 불필요함. - 동일 내용 반복
  // const [hasWinner, setHasWinner] = useState(false);
  
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  // 게임을 재시작할 때 기존 배열이 아닌 새로운 배열을 추가하게 하는 코드 => rematch 정상 작동.
  const gameBoard = deriveGameBoard(gameTurns); // 아웃소싱

  const winner = deriveWinner(gameBoard, players); // 아웃소싱

  const hasDraw = gameTurns.length === 9 && !winner;

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
  
  // GameOver 컴포넌트 안에서 이 함수가 촉진되도록 하면 됨.
  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
          initialName={PLAYERS.X} 
          symbol="X" 
          isActive={activePlayer === 'X'} 
          onChangeName={handlePlayerNameChange}
        />
        <Player 
          initialName={PLAYERS.O} 
          symbol="O" 
          isActive={activePlayer === 'O'} 
          onChangeName={handlePlayerNameChange}
        />
      </ol>
      {(winner || hasDraw) && (
        <GameOver winner={winner} onRestart={handleRestart} />
      )}
      <GameBoard 
        onSelectSquare={handleSelectSquare} 
        board = {gameBoard} 
      />
    </div>
    <Log turns={gameTurns} />
  </main>;
}

export default App
