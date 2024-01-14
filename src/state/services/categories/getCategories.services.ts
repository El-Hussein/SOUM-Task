import {getCategoriesAPIData} from '@__mocks__/getCategoriesAPI';
import {GetCategoriesAPI} from '@app-types';
import {makeGetRequest} from '@utils/api.helpers';

export const getCategoriesAPI: GetCategoriesAPI = () => {
  // let url = 'buyer/api/categories';
  // return makeGetRequest({
  //   url,
  // }).then((res) => res.data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data: getCategoriesAPIData()});
    }, 1000);
  });
};
