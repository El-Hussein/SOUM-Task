import {HTTP_REQUEST_STATE_ENUM, HomeCategoriesState} from '@app-types';
import {createReducer} from '@utils/createReducer';
import getHandlers from './homeCategoriesReducer.handlers';
import selectHandlers from './selectHomeCategoryReducer.handlers';

const initialState: HomeCategoriesState = {
  state: HTTP_REQUEST_STATE_ENUM.IDLE,
  categoryIds: [],
  selectedCategoryId: 0,
};

export default createReducer(initialState, {...getHandlers, ...selectHandlers});
