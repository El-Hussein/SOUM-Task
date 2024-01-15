import {GetOffersAPI} from '@app-types';
import {getOffersAPIData} from '@__mocks__/getOffersAPI';
import {makeGetRequest} from '@utils/api.helpers';

export const getOffersAPI: GetOffersAPI = productIds => {
  // let url = `api/offers?product_id=${productId}&page=1&limit=20&`;
  // return makeGetRequest({
  //   url,
  // }).then(res => res.data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data: getOffersAPIData(productIds)});
    }, 1000);
  });
};
