import {getProductsAPIData} from '@__mocks__/getProductsAPI';
import {GetProductsAPI} from '@app-types';
import {makeGetRequest} from '@utils/api.helpers';

export const getProductsAPI: GetProductsAPI = brandId => {
  // let url = `api/products?brand_id=${brandId}`;
  // return makeGetRequest({
  //   url,
  // }).then(res => res.data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data: getProductsAPIData(brandId)});
    }, 1000);
  });
};
