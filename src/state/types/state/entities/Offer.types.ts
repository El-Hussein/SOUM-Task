export interface OfferDiscount {
  discount_cut_off: number;
  discount_percentage: number;
  discount_price: number;
}

export interface Offer {
  offerId: number;
  title: string;
  price: number;
  image: string;
  productId: number;
  price_after_discount: number;
  in_cart: boolean;
  in_favorite?: boolean;
  in_stock: boolean;
  activeDiscount?: OfferDiscount;
  specs: {[key: string]: string}[];
}
