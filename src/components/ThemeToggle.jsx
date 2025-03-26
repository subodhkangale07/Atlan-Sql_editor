import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="theme-toggle">
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </label>
    </div>
  );
};

export default ThemeToggle;