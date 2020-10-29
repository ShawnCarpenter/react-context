import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [themeSelection, setThemeSelection] = useState('lightMode');

  const switchTheme = () => {
    setThemeSelection(oldTheme => (oldTheme === 'lightMode' ?
      'darkMode' :
      'lightMode'));
  };

  return (
    <ThemeContext.Provider value={{ themeSelection, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );

};
