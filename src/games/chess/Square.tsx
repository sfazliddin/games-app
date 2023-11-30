// ChessSquare.tsx
import React from "react";

interface ChessSquareProps {
  piece: string;
  onClick: () => void;
}

const Square: React.FC<ChessSquareProps> = ({ piece, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {piece}
    </div>
  );
};

export default Square;
