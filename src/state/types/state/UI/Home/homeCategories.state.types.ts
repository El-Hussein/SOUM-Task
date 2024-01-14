import {HTTP_REQUEST_STATE_ENUM} from '@app-types/common';

export interface HomeCategoriesState {
  state: HTTP_REQUEST_STATE_ENUM;
  categoryIds: number[];
  selectedCategoryId: number;
}
