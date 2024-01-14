import categoryReducerHandler from './category/categoryReducer.handlers';
import brandReducerHandler from './brand/brandReducer.handlers';
import productReducerHandler from './product/productReducer.handlers';
import offerReducerHandler from './offer/offerReducer.handlers';

export default {
  ...categoryReducerHandler,
  ...brandReducerHandler,
  ...offerReducerHandler,
  ...productReducerHandler,
};
