import React from 'react';
import Square from './Square.jsx';

const Board = ({ squares, onClick }) => {
  return (
    <div >
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
