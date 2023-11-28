// src/components/HomeScreen.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-extrabold mb-8 text-center">
        Welcome to the Game App
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/1-player" className="btn">
          1 Player Games
        </Link>
        <Link to="/2-player" className="btn">
          2 Player Games
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
