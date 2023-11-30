// src/components/GameScreen.tsx
import React from "react";
import { Link } from "react-router-dom";
import { GoBackButton } from "./GeneralButtons";

const GameScreen: React.FC = () => {
  // Implement your game logic here
  return (
    <div className="container mx-auto mt-10">
      <GoBackButton />
      <h1 className="text-4xl font-bold mb-6">Games Screen</h1>
      <Link to="/shut-the-box" className="btn">
        Play Shut The Box
      </Link>
      <Link to="/chess" className="btn">
        Play Chess
      </Link>
    </div>
  );
};

export default GameScreen;
