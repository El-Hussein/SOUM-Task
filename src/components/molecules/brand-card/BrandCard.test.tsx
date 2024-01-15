import {fireEvent, render} from '@testing-library/react-native';
import BrandCard from './BrandCard';
import {appleBrand} from '@__mocks__/separated-brands';

describe('BrandCard', () => {
  it('should have a text of Brand Card and image', () => {
    const {getByTestId} = render(<BrandCard brand={appleBrand} />);
    expect(getByTestId('brand-card' + appleBrand.brandId)).toBeTruthy();
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <BrandCard brand={appleBrand} onPress={onPress} />,
    );
    fireEvent.press(getByTestId('brand-card' + appleBrand.brandId));
    expect(onPress).toHaveBeenCalled();
  });
});
