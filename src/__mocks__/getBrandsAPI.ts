import {Brand} from '@app-types';
import {
  appleBrand,
  samsungBrand,
  huaweiBrand,
  oppoBrand,
  xiaomiBrand,
  vivoBrand,
  hpBrand,
  dellBrand,
  lenovoBrand,
  asusBrand,
  lgTVBrand,
  sonyTVBrand,
  rolexBrand,
  casioBrand,
  tissotBrand,
} from './separated-brands';

const phoneBrands: Brand[] = [
  appleBrand,
  samsungBrand,
  huaweiBrand,
  oppoBrand,
  xiaomiBrand,
  vivoBrand,
];

const computerBrands: Brand[] = [hpBrand, dellBrand, lenovoBrand, asusBrand];

const tvBrands: Brand[] = [lgTVBrand, sonyTVBrand];

const watchBrands: Brand[] = [rolexBrand, casioBrand, tissotBrand];

export const getBrandsAPIData = (categoryId: number) => {
  switch (categoryId) {
    case 1:
      return phoneBrands;
    case 2:
      return computerBrands;
    case 3:
      return tvBrands;
    case 4:
      return watchBrands;
    default:
      return [];
  }
};
