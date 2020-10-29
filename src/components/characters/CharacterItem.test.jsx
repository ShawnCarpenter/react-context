import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('CharacterItem component', () => {
  it('renders CharacterItem', () => {
    const { asFragment } = render(<CharacterItem
      name="Avatar"
      photoUrl="http://photo.com/img.jpg"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
