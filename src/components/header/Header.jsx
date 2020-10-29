import React from 'react';
import { useSwitchTheme } from '../../hooks/theme';

const Header = () => {
  const switchTheme = useSwitchTheme();
 
  return (
    <div>
      <h1>Header</h1>
      <button onClick={switchTheme}>Hit the lights!</button>
    </div>
  );
};

export default Header;
