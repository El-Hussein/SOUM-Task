import {
  GetCategoriesHTTPErrorResponse,
  GetCategoriesHTTPSuccessResponse,
} from '@app-types';
import { makeGetRequest } from '@utils/api.helpers';

export const getCategoriesAPI = ({
  filters,
}: {
  filters?: {
    categoryIds: number[];
  };
}): Promise<
  GetCategoriesHTTPSuccessResponse | GetCategoriesHTTPErrorResponse
> => {
  let url = 'buyer/api/categories?';
  filters?.categoryIds.forEach((categoryId) => {
    url += `catagories_ids[]=${categoryId}&`;
  });
  return makeGetRequest({
    url,
  }).then((res) => res.data);
};
