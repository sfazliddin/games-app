// src/components/SettingsScreen.tsx
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { GoBackButton } from "./GeneralButtons";

const SettingsScreen: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("medium");

  useEffect(() => {
    // Apply dark mode class to the body when darkMode changes
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Set the body font size based on the selected option
    document.body.style.fontSize = fontSize;
  }, [fontSize]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
  };

  return (
    <div className="container mx-auto mt-10">
      <GoBackButton />
      <h1 className="text-4xl font-bold mb-6">Settings</h1>

      <div className="mb-4 relative">
        <label className="mr-2">Dark Mode:</label>
        <button
          type="button"
          onClick={toggleDarkMode}
          className={`dark-toggler w-16 h-8 flex items-center justify-center rounded-full ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          {darkMode ? (
            <MoonIcon className="w-4 h-4 text-gray-200" />
          ) : (
            <SunIcon className="w-4 h-4 text-gray-800" />
          )}
        </button>
      </div>

      <div className="mb-4">
        <label className="mr-2">Font Size:</label>
        <select
          value={fontSize}
          onChange={(e) => changeFontSize(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="mb-4">
        <p>Other settings go here...</p>
      </div>
    </div>
  );
};

export default SettingsScreen;
