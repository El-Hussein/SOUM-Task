import {
  GetBrandsHTTPErrorResponse,
  GetBrandsHTTPSuccessResponse,
} from '@app-types';
import { makeGetRequest } from '@utils/api.helpers';

export const getBrandsAPI = ({
  filters,
}: {
  filters: {
    brandIds: number[];
  };
}): Promise<GetBrandsHTTPSuccessResponse | GetBrandsHTTPErrorResponse> => {
  let url = 'buyer/api/brands?';
  filters.brandIds.forEach((brandId) => {
    url += `brandIds[]=${brandId}&`;
  });
  return makeGetRequest({
    url,
  }).then((res) => res.data);
};
