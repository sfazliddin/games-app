// src/components/HomeScreen.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Game App</h1>
      <div className="grid grid-cols-1 gap-4">
        <Link to="/1-player" className="btn">
          Play 1 Player
        </Link>
        <Link to="/2-player" className="btn">
          Play 2 Player
        </Link>
        <Link to="/settings" className="btn">
          Settings
        </Link>
        <Link to="/feedback" className="btn">
          Give Feedback
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
