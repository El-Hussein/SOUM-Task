import {fireEvent, render} from '@testing-library/react-native';
import BrandCard from './OfferCard';
import {iphone15Black128} from '@__mocks__/separated-offers';

describe('BrandCard', () => {
  it('should have a text of Brand Card and image', () => {
    const {getByTestId} = render(<BrandCard offer={iphone15Black128} />);
    expect(getByTestId('offer-card' + iphone15Black128.offerId)).toBeTruthy();
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <BrandCard offer={iphone15Black128} onPress={onPress} />,
    );
    fireEvent.press(getByTestId('offer-card' + iphone15Black128.offerId));
    expect(onPress).toHaveBeenCalled();
  });
});
