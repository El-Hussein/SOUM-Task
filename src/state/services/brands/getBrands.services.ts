import {getBrandsAPIData} from '@__mocks__/getBrandsAPI';
import {GetBrandsAPI} from '@app-types';
import {makeGetRequest} from '@utils/api.helpers';

export const getBrandsAPI: GetBrandsAPI = categoryId => {
  // let url = `api/brands?category_id=${categoryId}`;
  // return makeGetRequest({
  //   url,
  // }).then(res => res.data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data: getBrandsAPIData(categoryId)});
    }, 1000);
  });
};
