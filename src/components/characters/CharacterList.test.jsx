import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { CharacterList } from './CharacterList';
import { getCharacters } from '../../services/AvatarApi';

jest.mock('../../hooks/theme.js');
jest.mock('../../services/AvatarApi.js');


describe('CharacterList component', () => {
  it('renders CharacterList', async() => {
    getCharacters.mockResolvedValue([{
      _id:'id',
      name:'Dude',
      photoUrl:'http://www.img.com/pic.jpg'
    }]);

    const { asFragment } = render(
      <CharacterList />
    );
    screen.getByText('Loading...');
    const characterList = await screen.findByTestId('characters');
    expect(asFragment()).toMatchSnapshot();
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
      expect(characterList).toHaveTextContent('Dude');

    });
  });
});
