import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useSwitchTheme = () => {
  const { switchTheme } = useContext(ThemeContext);
  return switchTheme;
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
