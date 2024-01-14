import {OnNewBrands} from '@app-types/actions';
import {createActionHelper} from '@utils/action.helpers';
import {ON_NEW_BRANDS} from './brand.ACTION_TYPES';

export const onNewBrands: OnNewBrands = createActionHelper(
  ON_NEW_BRANDS,
  'brands',
);
