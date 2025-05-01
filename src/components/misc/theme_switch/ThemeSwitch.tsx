import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  // Применяем тему ко всему документу
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
    </button>
  );
};

export default ThemeSwitch;
