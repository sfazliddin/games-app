// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import GameScreen from "./components/GameScreen";
import SettingsScreen from "./components/SettingsScreen";
import FeedbackScreen from "./components/FeedbackScreen";
import ShutTheBoxGame from "./games/ShutTheBox";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="/1-player" Component={GameScreen} />
        <Route path="/2-player" Component={GameScreen} />
        <Route path="/settings" Component={SettingsScreen} />
        <Route path="/feedback" Component={FeedbackScreen} />
        <Route path="/shut-the-box" Component={ShutTheBoxGame} />
      </Routes>
    </Router>
  );
};

export default App;
