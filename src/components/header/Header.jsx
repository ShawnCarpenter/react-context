import React from 'react';
import { useSwitchTheme, useTheme } from '../../hooks/theme';
import styles from './Header.css';

const Header = () => {
  const switchTheme = useSwitchTheme();
  const theme = useTheme();

  return (
    <div className={styles.Header} style={theme}>
      <h1>Themes, yay...</h1>
      <button onClick={switchTheme} style={theme}>Hit the lights!</button>
    </div>
  );
};

export default Header;
