// Chessboard.tsx
import React from "react";
import Square from "./Square";

interface ChessboardProps {
  board: string[][];
  onSquareClick: (row: number, col: number) => void;
}

const Chessboard: React.FC<ChessboardProps> = ({ board, onSquareClick }) => {
  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((piece, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              piece={piece}
              onClick={() => onSquareClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;
