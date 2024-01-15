import {getProductsAPI} from '@services';
import ProductList from './ProductList';
import {renderWithStateAndNavigation} from '@utils/testingHelpers';
import {
  GetProductsHTTPSuccessResponse,
  HTTP_REQUEST_STATE_ENUM,
} from '@app-types';
import {getHomeProductsApiFakeSuccessResponse} from '@__mocks__/fakeData';
import {Iphone15, Iphone15Pro} from '@__mocks__/separated-products';
import {waitFor} from '@testing-library/react-native';

jest.mock('@services/products/getProducts.services');
it('empty test', () => {});
describe('ProductList', () => {
  it('should render all products', async () => {
    (
      getProductsAPI as jest.Mock<Promise<GetProductsHTTPSuccessResponse>>
    ).mockReturnValue(getHomeProductsApiFakeSuccessResponse);
    const component = renderWithStateAndNavigation(<ProductList />, {
      initialState: {
        UI: {
          home: {
            brands: {
              selectedBrandId: 1,
              brandIds: [1],
              state: HTTP_REQUEST_STATE_ENUM.SUCCESS,
            },
          },
        },
      },
    });

    const {getByTestId} = component;
    await waitFor(() => {
      expect(getByTestId('product-card' + Iphone15Pro.productId)).toBeDefined();
      expect(getByTestId('product-card' + Iphone15.productId)).toBeDefined();
    });
  });
});
