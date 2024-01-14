import {OnNewProducts} from '@app-types/actions';
import {createActionHelper} from '@utils/action.helpers';
import {ON_NEW_PRODUCTS} from './product.ACTION_TYPES';

export const onNewProducts: OnNewProducts = createActionHelper(
  ON_NEW_PRODUCTS,
  'products',
);
