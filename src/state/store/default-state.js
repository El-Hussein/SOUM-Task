import { authInitialState } from '../auth/reducers/auth-reducer';
import { verifyOtpInitialState } from '../auth/reducers/verify-reducer';
import { countriesLangsInitialState } from '../auth/reducers/countries-and-languages.reducer';
import { registerInitialState } from '../auth/reducers/register-reducer';
import { getCitiesInitialState } from '../auth/reducers/get-cities-reducer';
import { getReferredInitialState } from '../auth/reducers/get-reffered-reducer';
import { productSellerInitialState } from '../products/reducers/get-product-seller-store';
import { homeSliderInitialState } from '../products/reducers/get-home-slider';

export const defaultState = {
  auth: authInitialState,
  productSeller: productSellerInitialState,
  verify: verifyOtpInitialState,
  register: registerInitialState,
  countries_langs: countriesLangsInitialState,
  cities: getCitiesInitialState,
  referred: getReferredInitialState,
  homeSliders: homeSliderInitialState,
};
