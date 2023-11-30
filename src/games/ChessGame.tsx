import { Chessboard } from "react-chessboard";
const ChessGame: React.FC = () => {
  return (
    <div>
      <Chessboard id="BasicBoard" boardWidth={900} />
    </div>
  );
};

export default ChessGame;
