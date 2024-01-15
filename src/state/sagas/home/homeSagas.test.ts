import {
  fakeStateWithHomeBrandsState,
  fakeStateWithHomeCategoriesState,
  fakeStateWithHomeOffersState,
  fakeStateWithHomeProductsState,
  getHomeBrandsApiFakeSuccessResponse,
  getHomeCategoriesApiFakeSuccessResponse,
  getHomeOffersApiFakeSuccessResponse,
  getHomeProductsApiFakeSuccessResponse,
} from '@__mocks__/fakeData';
import {
  GetBrandsHTTPSuccessResponse,
  GetCategoriesHTTPSuccessResponse,
  GetOffersHTTPSuccessResponse,
  GetProductsHTTPSuccessResponse,
} from '@app-types';
import {
  getBrandsAPI,
  getCategoriesAPI,
  getOffersAPI,
  getProductsAPI,
} from '@services';
import {customRunSaga} from '@utils/testingHelpers';
import {getHomeProducts} from './homeProducts.sagas';
import {Iphone15, Iphone15Pro} from '@__mocks__/separated-products';
import {iphone15Black128} from '@__mocks__/separated-offers';
import {getHomeOffers} from './homeOffers.sagas';
import {getHomeCategories} from './homeCategories.sagas';
import {phonesCategory} from '@__mocks__/separated-categories';
import {getHomeBrands} from './homeBrands.sagas';
import {appleBrand} from '@__mocks__/separated-brands';

jest.mock('@services/products/getProducts.services');
jest.mock('@services/offers/getOffers.services');
jest.mock('@services/categories/getCategories.services');
jest.mock('@services/brands/getBrands.services');

it('empty test', () => {});
describe('home products saga', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should dispatch three actions, firstly is pending then the success action with response if request success and on new products', async () => {
    (
      getProductsAPI as jest.Mock<Promise<GetProductsHTTPSuccessResponse>>
    ).mockReturnValue(getHomeProductsApiFakeSuccessResponse);

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeProductsState,
      getHomeProducts,
      {
        payload: {
          brandId: 1,
        },
      },
    );

    expect(getProductsAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(3);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_PRODUCTS_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_PRODUCTS_SUCCESS',
      payload: {
        response: {data: [Iphone15, Iphone15Pro]},
      },
    });
    expect(dispatchedActions[2]).toEqual({
      type: 'ON_NEW_PRODUCTS',
      payload: {products: [Iphone15, Iphone15Pro]},
    });
  });

  it('should dispatch two actions, firstly the pending then fail action if request fail', async () => {
    const failureResponse = Promise.reject({
      error: 'Error',
    });
    (getProductsAPI as jest.Mock<Promise<{error: string}>>).mockReturnValue(
      failureResponse,
    );

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeProductsState,
      getHomeProducts,
      {
        payload: {
          brandId: 1,
        },
      },
    );

    expect(getProductsAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_PRODUCTS_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_PRODUCTS_ERROR',
      payload: {
        error: {
          error: 'Error',
        },
      },
    });
  });
});

describe('home offers saga', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should dispatch three actions, firstly is pending then the success action with response if request success and on new offers', async () => {
    (
      getOffersAPI as jest.Mock<Promise<GetOffersHTTPSuccessResponse>>
    ).mockReturnValue(getHomeOffersApiFakeSuccessResponse);

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeOffersState,
      getHomeOffers,
      {
        payload: {
          brandId: 1,
        },
      },
    );

    expect(getOffersAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(3);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_OFFERS_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_OFFERS_SUCCESS',
      payload: {
        response: {data: [iphone15Black128]},
      },
    });
    expect(dispatchedActions[2]).toEqual({
      type: 'ON_NEW_OFFERS',
      payload: {offers: [iphone15Black128]},
    });
  });

  it('should dispatch two actions, firstly the pending then fail action if request fail', async () => {
    const failureResponse = Promise.reject({
      error: 'Error',
    });
    (getOffersAPI as jest.Mock<Promise<{error: string}>>).mockReturnValue(
      failureResponse,
    );

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeOffersState,
      getHomeOffers,
      {
        payload: {
          brandId: 1,
        },
      },
    );

    expect(getOffersAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_OFFERS_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_OFFERS_ERROR',
      payload: {
        error: {
          error: 'Error',
        },
      },
    });
  });
});

describe('home categories saga', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should dispatch three actions, firstly is pending then the success action with response if request success and on new categories', async () => {
    (
      getCategoriesAPI as jest.Mock<Promise<GetCategoriesHTTPSuccessResponse>>
    ).mockReturnValue(getHomeCategoriesApiFakeSuccessResponse);

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeCategoriesState,
      getHomeCategories,
    );

    expect(getCategoriesAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(3);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_CATEGORIES_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_CATEGORIES_SUCCESS',
      payload: {
        response: {data: [phonesCategory]},
      },
    });
    expect(dispatchedActions[2]).toEqual({
      type: 'ON_NEW_CATEGORIES',
      payload: {categories: [phonesCategory]},
    });
  });

  it('should dispatch two actions, firstly the pending then fail action if request fail', async () => {
    const failureResponse = Promise.reject({
      error: 'Error',
    });
    (getCategoriesAPI as jest.Mock<Promise<{error: string}>>).mockReturnValue(
      failureResponse,
    );

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeCategoriesState,
      getHomeCategories,
      {
        payload: {
          brandId: 1,
        },
      },
    );

    expect(getCategoriesAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_CATEGORIES_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_CATEGORIES_ERROR',
      payload: {
        error: {
          error: 'Error',
        },
      },
    });
  });
});

describe('home brands saga', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should dispatch three actions, firstly is pending then the success action with response if request success and on new brands', async () => {
    (
      getBrandsAPI as jest.Mock<Promise<GetBrandsHTTPSuccessResponse>>
    ).mockReturnValue(getHomeBrandsApiFakeSuccessResponse);

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeBrandsState,
      getHomeBrands,
      {
        payload: {
          categoryId: 1,
        },
      },
    );

    expect(getBrandsAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(3);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_BRANDS_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_BRANDS_SUCCESS',
      payload: {
        response: {data: [appleBrand]},
      },
    });
    expect(dispatchedActions[2]).toEqual({
      type: 'ON_NEW_BRANDS',
      payload: {brands: [appleBrand]},
    });
  });

  it('should dispatch two actions, firstly the pending then fail action if request fail', async () => {
    const failureResponse = Promise.reject({
      error: 'Error',
    });
    (getBrandsAPI as jest.Mock<Promise<{error: string}>>).mockReturnValue(
      failureResponse,
    );

    const dispatchedActions = await customRunSaga(
      fakeStateWithHomeBrandsState,
      getHomeBrands,
      {
        payload: {
          categoryId: 1,
        },
      },
    );

    expect(getBrandsAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual({
      type: 'GET_HOME_BRANDS_PENDING',
      payload: {},
    });
    expect(dispatchedActions[1]).toEqual({
      type: 'GET_HOME_BRANDS_ERROR',
      payload: {
        error: {
          error: 'Error',
        },
      },
    });
  });
});
