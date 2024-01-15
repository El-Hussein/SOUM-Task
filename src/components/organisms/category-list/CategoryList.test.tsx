import {getCategoriesAPI} from '@services';
import CategoryList from './CategoryList';
import {renderWithStateAndNavigation} from '@utils/testingHelpers';
import {GetCategoriesHTTPSuccessResponse} from '@app-types';
import {getHomeCategoriesApiFakeSuccessResponse} from '@__mocks__/fakeData';
import {phonesCategory} from '@__mocks__/separated-categories';
import {waitFor} from '@testing-library/react-native';

jest.mock('@services/categories/getCategories.services');
it('empty test', () => {});
describe('CategoryList', () => {
  it('should render all categories', async () => {
    (
      getCategoriesAPI as jest.Mock<Promise<GetCategoriesHTTPSuccessResponse>>
    ).mockReturnValue(getHomeCategoriesApiFakeSuccessResponse);
    const component = renderWithStateAndNavigation(<CategoryList />);

    const {getByTestId, getByText} = component;
    await waitFor(() => {
      expect(getByText(phonesCategory.name)).toBeDefined();
      expect(
        getByTestId('category-card' + phonesCategory.categoryId),
      ).toBeDefined();
    });
  });
});
