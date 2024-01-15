import {EntitiesState} from '@app-types';
import {createReducer} from '@utils/createReducer';
import handlers from './handlers';

export const initialState: EntitiesState = {
  categories: {},
  brands: {},
  offers: {},
  products: {},
};

export default createReducer(initialState, handlers);
