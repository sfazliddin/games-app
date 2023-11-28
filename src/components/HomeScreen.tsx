// src/components/HomeScreen.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Game App</h1>
      <Link to="/1-player">Play 1 Player</Link>
      <Link to="/2-player">Play 2 Player</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/feedback">Give Feedback</Link>
    </div>
  );
};

export default HomeScreen;
