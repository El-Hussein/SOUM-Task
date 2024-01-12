import {Brand} from './Brand.types';
import {Category} from './Category.types';
import {Offer} from './Offer.types';
import {Seller} from './Seller.types';

export interface EntitiesState {
  categories: {[key: string]: Category};
  brands: {[key: string]: Brand};
  offers: {[key: string]: Offer};
  sellers: {[key: string]: Seller};
}
