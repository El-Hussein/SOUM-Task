import { GetHomeSectionHTTPErrorResponse, GetHomeSectionHTTPSuccessResponse } from '@app-types';
import { makeGetRequest } from '@utils/api.helpers';

export const getHomeSectionsAPI = (): Promise<GetHomeSectionHTTPSuccessResponse | GetHomeSectionHTTPErrorResponse> => {
  return makeGetRequest({
    url: 'buyer/api/home-sections',
  }).then(res => res.data);
};
