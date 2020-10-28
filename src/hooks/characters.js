import { useEffect, useState } from 'react';
import { CharacterList } from '../components/characters/CharacterList';
import { getCharacters } from '../services/AvatarApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return {
    characters,
    loading
  };
};
