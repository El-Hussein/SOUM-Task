import {ON_NEW_PRODUCTS} from '@actions/ACTION_TYPES';
import {EntitiesState, Product} from '@app-types';
import {normalize} from 'normalizr';
import {productsSchema} from './product.schema';

export default {
  [ON_NEW_PRODUCTS]: (
    draftStart: EntitiesState,
    {products}: {products: Product[]},
  ) => {
    const {entities} = normalize(products, productsSchema);
    draftStart.products = {
      ...draftStart.products,
      ...(entities.products as {[key: string]: Product}),
    };
  },
};
