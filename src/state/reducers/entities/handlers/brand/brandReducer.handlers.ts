import {ON_NEW_BRANDS} from '@actions/ACTION_TYPES';
import {Brand, EntitiesState} from '@app-types';
import {normalize} from 'normalizr';
import {brandsSchema} from './brand.schema';

export default {
  [ON_NEW_BRANDS]: (draftState: EntitiesState, {brands}: {brands: Brand[]}) => {
    try {
      const {entities} = normalize(brands, brandsSchema);
      console.log('entities', draftState.brands, entities.brands);
      draftState.brands = {
        ...draftState.brands,
        ...(entities.brands as {[key: string]: Brand}),
      };
    } catch (e) {
      console.log('error', e);
    }
  },
};
