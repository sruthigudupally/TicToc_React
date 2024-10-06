import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [squares, setSquares] = useState(Array(9));
  const [Next, setNext] = useState(true);
  
  const handleClick = (index) => {
    if (squares[index] ) return;
    const newSquares = squares.slice();
    newSquares[index] = Next ? 'X' : 'O';
    setSquares(newSquares);
    setNext(!Next);
   
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${Next ? 'X' : 'O'}`;

  return (
    <div>
      <div >{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button onClick={() => setSquares(Array(9).fill(null))}>Reset</button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;