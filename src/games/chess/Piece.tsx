// Piece.tsx

import React from "react";

interface PieceProps {
  type: string;
}

const Piece: React.FC<PieceProps> = ({ type }) => {
  return <div className="piece">{type}</div>;
};

export default Piece;
