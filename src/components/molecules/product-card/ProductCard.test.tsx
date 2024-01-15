import {fireEvent, render} from '@testing-library/react-native';
import ProductCard from './ProductCard';
import {Iphone15} from '@__mocks__/separated-products';

describe('ProductCard', () => {
  it('should have a text of Product Card and image', () => {
    const {getByTestId} = render(<ProductCard product={Iphone15} />);
    expect(getByTestId('product-card' + Iphone15.productId)).toBeTruthy();
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <ProductCard product={Iphone15} onPress={onPress} />,
    );
    fireEvent.press(getByTestId('product-card' + Iphone15.productId));
    expect(onPress).toHaveBeenCalled();
  });
});
