import {fireEvent, render} from '@testing-library/react-native';
import CategoryCard from './CategoryCard';
import {phonesCategory} from '@__mocks__/separated-categories';

describe('CategoryCard', () => {
  it('should have a text of Category Card and image', () => {
    const {getByTestId} = render(<CategoryCard category={phonesCategory} />);
    expect(
      getByTestId('category-card' + phonesCategory.categoryId),
    ).toBeTruthy();
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <CategoryCard category={phonesCategory} onPress={onPress} />,
    );
    fireEvent.press(getByTestId('category-card' + phonesCategory.categoryId));
    expect(onPress).toHaveBeenCalled();
  });
});
