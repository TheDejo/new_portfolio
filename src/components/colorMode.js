import {useState} from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return [theme, toggleTheme];
};

