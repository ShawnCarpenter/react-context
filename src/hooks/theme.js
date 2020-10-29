import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';


export const useTheme = () => {
  const [theme, setTheme] = useState('lightMode');
  const themeType = useThemeType();


  useEffect(() => {
    setTheme(themeType);
  }, [themeType]);
  return theme;

};
export const useSwitchTheme = () => {
  const { switchTheme } = useContext(ThemeContext);
  return switchTheme;
};

export const useThemeType = () => {
  const { themeSelection } = useContext(ThemeContext);
  return themeSelection;
};
