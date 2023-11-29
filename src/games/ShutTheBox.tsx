import React, { useState } from "react";
import { GoBackButton } from "../components/GeneralButtons";

interface GameState {
  remainingNumbers: number[];
  selectedNumbers: number[];
  dice1: number;
  dice2: number;
  currentPlayer: number;
  scores: number[];
}

const initialGameState: GameState = {
  remainingNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  selectedNumbers: [],
  dice1: 1,
  dice2: 1,
  currentPlayer: 0,
  scores: [0, 0], // Scores for Player 1 and Player 2
};

const ShutTheBoxGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [diceRolled, setDiceRolled] = useState(false);
  const [sum, setSum] = useState(0);

  const rollDice = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    setSum(dice1 + dice2);
    setGameState({
      ...gameState,
      dice1,
      dice2,
    });

    setDiceRolled(true);
  };
  const endTurn = () => {
    const { remainingNumbers, currentPlayer, scores } = gameState;

    const currentScore = remainingNumbers.reduce((acc, num) => acc + num, 0);
    const newScores = [...scores];
    newScores[currentPlayer] += currentScore;

    setGameState({
      ...initialGameState,
      currentPlayer: 1 - currentPlayer, // Switch to the other player
      scores: newScores,
    });
    setSum(0);
    setDiceRolled(false);
  };
  const handleNumberClick = (number: number) => {
    const { remainingNumbers, selectedNumbers, currentPlayer } = gameState;

    if (remainingNumbers.includes(number) && sum >= number) {
      setGameState({
        ...gameState,
        remainingNumbers: remainingNumbers.filter((n) => n !== number),
        selectedNumbers: [...selectedNumbers, number],
      });
      setSum(sum - number);
    }
  };
  const checkWin = () => {
    const { remainingNumbers, currentPlayer, scores } = gameState;

    if (remainingNumbers.length === 0) {
      const winningPlayer = currentPlayer;
      const winningScore = scores[winningPlayer];
      const doubleStake = winningScore * 2;

      alert(
        `Player ${winningPlayer + 1} wins with a score of ${winningScore}!`
      );
      alert(
        `Player ${winningPlayer + 1} receives double the stake: ${doubleStake}`
      );
      setGameState(initialGameState);
    } else {
      endTurn();
    }
  };

  const renderNumbers = () => {
    return gameState.remainingNumbers.map((number) => (
      <button
        key={number}
        disabled={gameState.selectedNumbers.includes(number)}
        onClick={() => handleNumberClick(number)}
        className={`m-2 px-4 py-2 border rounded ${
          gameState.selectedNumbers.includes(number)
            ? "bg-gray-500"
            : "bg-blue-500"
        }`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="container mx-auto mt-10 text-center">
      <GoBackButton />
      <h1 className="text-4xl font-bold mb-6">Shut the Box</h1>
      <p>total: {sum}</p>
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-lg mb-4">
          {diceRolled
            ? `Dice: ${gameState.dice1} + ${gameState.dice2} = ${
                gameState.dice1 + gameState.dice2
              }`
            : "Roll the dice to reveal the sum"}
        </p>
        <div className="flex justify-center">{renderNumbers()}</div>
        <button
          onClick={checkWin}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          End Turn
        </button>
        <button
          onClick={rollDice}
          className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default ShutTheBoxGame;
