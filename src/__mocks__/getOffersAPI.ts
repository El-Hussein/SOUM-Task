import {Offer} from '@app-types';
import {
  iphone15White128,
  iphone15Black128,
  iphone15White256,
  iphone15Black256,
  iphone15Rose256,
  iphone15ProWhite128,
  iphone15ProBlack128,
  iphone15ProMaxWhite128,
  samsungGalaxyA52White128,
  samsungGalaxyA72White128,
  xiaomiRedmiNote10Blue128,
  hpZBook1516,
  dellInspiron1516,
  lgOLED55,
  lgOLED65,
  rolexSubmariner,
  casioGShock,
} from './separated-offers';

const Iphone15Offers: Offer[] = [
  iphone15White128,
  iphone15Black128,
  iphone15White256,
  iphone15Black256,
  iphone15Rose256,
];

const Iphone15ProOffers: Offer[] = [iphone15ProWhite128, iphone15ProBlack128];

const Iphone15ProMaxOffers: Offer[] = [iphone15ProMaxWhite128];

const SamsungGalaxyA52Offers: Offer[] = [samsungGalaxyA52White128];

const SamsungGalaxyA72Offers: Offer[] = [samsungGalaxyA72White128];

const XiaomiRedmiNote10Offers: Offer[] = [xiaomiRedmiNote10Blue128];

const HpZBookOffers: Offer[] = [hpZBook1516];

const DellInspironOffers: Offer[] = [dellInspiron1516];

const LgOLEDOffers: Offer[] = [lgOLED55, lgOLED65];

const RolexSubmarinerOffers: Offer[] = [rolexSubmariner];

const CasioGShockOffers: Offer[] = [casioGShock];

export const getOffersAPIData = (productId: number) => {
  switch (productId) {
    case 1:
      return Iphone15Offers;
    case 2:
      return Iphone15ProOffers;
    case 3:
      return Iphone15ProMaxOffers;
    case 4:
      return SamsungGalaxyA52Offers;
    case 5:
      return SamsungGalaxyA72Offers;
    case 6:
      return XiaomiRedmiNote10Offers;
    case 11:
      return HpZBookOffers;
    case 13:
      return DellInspironOffers;
    case 16:
      return LgOLEDOffers;
    case 19:
      return RolexSubmarinerOffers;
    case 20:
      return CasioGShockOffers;
    default:
      return [];
  }
};
