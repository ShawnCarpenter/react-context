import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    color:'black',
    backgroundColor:'white'
  });

  const themeData = {
    lightMode: {
      color:'black',
      backgroundColor:'white'
    },
    darkMode:{
      color:'white',
      backgroundColor:'black'
    }
  };

  const switchTheme = () => {
    setTheme(oldTheme => (oldTheme.color === themeData.lightMode.color ?
      themeData.darkMode :
      themeData.lightMode));
  };


  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );

};
