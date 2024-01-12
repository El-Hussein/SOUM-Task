import { ON_NEW_BRANDS } from '@actions/ACTION_TYPES';
import { Brand, EntitiesState } from '@app-types';
import { normalize } from 'normalizr';
import { brandsSchema } from './brand.schema';

export default {
  [ON_NEW_BRANDS]: (
    draftState: EntitiesState,
    { brands }: { brands: Brand[] },
  ) => {
    const { entities } = normalize(brands, brandsSchema);
    draftState.brands = {
      ...draftState.brands,
      ...(entities.brands as { [key: string]: Brand }),
    };
  },
};
