import {Product} from '@app-types';
import {
  AsusZenbook,
  CasioGShock,
  DellInspiration,
  LGOLED,
  LGNano,
  LenovoThinkpad,
  RolexSubmariner,
  SonyBravia,
  HpPavilion,
  HpZBook15,
  HuaweiP40,
  HuaweiP40Pro,
  Iphone15,
  Iphone15Pro,
  Iphone15ProMax,
  OppoReno6,
  SamsungGalaxyA52,
  SamsungGalaxyA72,
  TissotTTouch,
  XiaomiRedmiNote10,
  XiaomiRedmiNote10Pro,
} from './separated-products';

const appleBrandProducts: Product[] = [Iphone15, Iphone15Pro, Iphone15ProMax];
const samsungBrandProducts: Product[] = [SamsungGalaxyA52, SamsungGalaxyA72];
const huaweiBrandProducts: Product[] = [HuaweiP40, HuaweiP40Pro];
const oppoBrandProducts: Product[] = [OppoReno6];
const xiaomiBrandProducts: Product[] = [
  XiaomiRedmiNote10,
  XiaomiRedmiNote10Pro,
];
const vivoBrandProducts: Product[] = [];
const hpBrandProducts: Product[] = [HpPavilion, HpZBook15];
const dellBrandProducts: Product[] = [DellInspiration];
const lenovoBrandProducts: Product[] = [LenovoThinkpad];
const asusBrandProducts: Product[] = [AsusZenbook];
const lgTVBrandProducts: Product[] = [LGOLED, LGNano];
const sonyTVBrandProducts: Product[] = [SonyBravia];
const rolexBrandProducts: Product[] = [RolexSubmariner];
const casioBrandProducts: Product[] = [CasioGShock];
const tissotBrandProducts: Product[] = [TissotTTouch];

export const getProductsAPIData = (brandId: number) => {
  switch (brandId) {
    case 1:
      return appleBrandProducts;
    case 2:
      return samsungBrandProducts;
    case 3:
      return huaweiBrandProducts;
    case 4:
      return oppoBrandProducts;
    case 5:
      return xiaomiBrandProducts;
    case 6:
      return vivoBrandProducts;
    case 7:
      return hpBrandProducts;
    case 8:
      return dellBrandProducts;
    case 9:
      return lenovoBrandProducts;
    case 10:
      return asusBrandProducts;
    case 11:
      return lgTVBrandProducts;
    case 12:
      return sonyTVBrandProducts;
    case 13:
      return rolexBrandProducts;
    case 14:
      return casioBrandProducts;
    case 15:
      return tissotBrandProducts;
    default:
      return [];
  }
};
