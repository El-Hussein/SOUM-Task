import {getOffersAPI} from '@services';
import OfferList from './OfferList';
import {renderWithStateAndNavigation} from '@utils/testingHelpers';
import {
  GetOffersHTTPSuccessResponse,
  HTTP_REQUEST_STATE_ENUM,
} from '@app-types';
import {getHomeOffersApiFakeSuccessResponse} from '@__mocks__/fakeData';
import {iphone15Black128} from '@__mocks__/separated-offers';
import {waitFor} from '@testing-library/react-native';

jest.mock('@services/offers/getOffers.services');
it('empty test', () => {});
describe('OfferList', () => {
  it('should render all offers', async () => {
    (
      getOffersAPI as jest.Mock<Promise<GetOffersHTTPSuccessResponse>>
    ).mockReturnValue(getHomeOffersApiFakeSuccessResponse);
    const component = renderWithStateAndNavigation(<OfferList />, {
      initialState: {
        UI: {
          home: {
            products: {
              selectedProductIds: [1],
              productIds: [1],
              state: HTTP_REQUEST_STATE_ENUM.SUCCESS,
            },
          },
        },
      },
    });

    const {getByTestId, getByText} = component;
    await waitFor(() => {
      expect(getByText('iPhone 15 Black 128GB')).toBeDefined();
      expect(getByTestId('offer-card2')).toBeDefined();
    });
  });
});
