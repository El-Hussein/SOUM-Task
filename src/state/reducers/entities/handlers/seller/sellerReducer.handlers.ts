import { ON_NEW_SELLERS } from '@actions/ACTION_TYPES';
import { EntitiesState, Seller } from '@app-types';
import { normalize } from 'normalizr';
import { sellersSchema } from './seller.schema';

export default {
  [ON_NEW_SELLERS]: (
    draftStart: EntitiesState,
    { sellers }: { sellers: Seller[] },
  ) => {
    const { entities } = normalize(sellers, sellersSchema);
    draftStart.sellers = {
      ...draftStart.sellers,
      ...(entities.sellers as { [key: string]: Seller }),
    };
  },
};
