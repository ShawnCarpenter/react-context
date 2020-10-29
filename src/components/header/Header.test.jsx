import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

jest.mock('../../hooks/theme.js');

describe('Header component', () => {
  it('renders Header', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
