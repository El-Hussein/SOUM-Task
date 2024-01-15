import HomeScreen from './HomeScreen';
import {renderWithStateAndNavigation} from '@utils/testingHelpers';

describe('HomeScreen', () => {
  it('should have 4 lists category list, brand list, product list, and offer list', () => {
    const {getByTestId} = renderWithStateAndNavigation(<HomeScreen />);
    expect(getByTestId('category-list')).toBeTruthy();
    expect(getByTestId('brand-list')).toBeTruthy();
    expect(getByTestId('product-list')).toBeTruthy();
    expect(getByTestId('offer-list')).toBeTruthy();
  });
});
