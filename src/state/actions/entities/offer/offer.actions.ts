import {OnNewOffers} from '@app-types/actions';
import {createActionHelper} from '@utils/action.helpers';
import {ON_NEW_OFFERS} from './offer.ACTION_TYPES';

export const onNewOffers: OnNewOffers = createActionHelper(
  ON_NEW_OFFERS,
  'offers',
);
