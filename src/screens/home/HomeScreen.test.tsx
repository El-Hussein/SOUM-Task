import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
// describe HomeScreen, it should render correctly and have a text of Home Screen

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const tree = render(<HomeScreen />);
    expect(tree).toMatchSnapshot();
  });
  it('should have a text of Home Screen', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('Home Screen')).toBeTruthy();
  });
});
