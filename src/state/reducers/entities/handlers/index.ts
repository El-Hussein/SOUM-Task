import categoryReducerHandler from './category/categoryReducer.handlers';
import brandReducerHandler from './brand/brandReducer.handlers';
import sellerReducerHandler from './seller/sellerReducer.handlers';
import offerReducerHandler from './offer/offerReducer.handlers';

export default {
  ...categoryReducerHandler,
  ...brandReducerHandler,
  ...offerReducerHandler,
  ...sellerReducerHandler,
};
