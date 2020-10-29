import React from 'react';
import { useCharacters } from '../../hooks/characters';
import { useTheme } from '../../hooks/theme';
import CharacterItem from './CharacterItem';
import styles from './CharacterList.css';

export const CharacterList = () => {
  const { loading, characters } = useCharacters();
  const theme = useTheme();
  
  if(loading) return <h1>Loading...</h1>;
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <CharacterItem {...character} />
    </li>
  ));
  return (
    <ul data-testid="characters" className={styles.CharacterList}
      style={theme}>
      {characterElements}
    </ul>
  );
};
