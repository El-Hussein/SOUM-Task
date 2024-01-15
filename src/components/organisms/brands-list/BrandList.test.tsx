import {getBrandsAPI} from '@services';
import BrandList from './BrandList';
import {renderWithStateAndNavigation} from '@utils/testingHelpers';
import {
  GetBrandsHTTPSuccessResponse,
  HTTP_REQUEST_STATE_ENUM,
} from '@app-types';
import {getHomeBrandsApiFakeSuccessResponse} from '@__mocks__/fakeData';
import {appleBrand} from '@__mocks__/separated-brands';
import {waitFor} from '@testing-library/react-native';

jest.mock('@services/brands/getBrands.services');
it('empty test', () => {});
describe('BrandList', () => {
  it('should render all brands', async () => {
    (
      getBrandsAPI as jest.Mock<Promise<GetBrandsHTTPSuccessResponse>>
    ).mockReturnValue(getHomeBrandsApiFakeSuccessResponse);
    const component = renderWithStateAndNavigation(<BrandList />, {
      initialState: {
        UI: {
          home: {
            categories: {
              selectedCategoryId: 1,
              categoryIds: [1],
              state: HTTP_REQUEST_STATE_ENUM.SUCCESS,
            },
          },
        },
      },
    });

    const {getByTestId} = component;
    await waitFor(() => {
      expect(getByTestId('brand-card' + appleBrand.brandId)).toBeDefined();
    });
  });
});
