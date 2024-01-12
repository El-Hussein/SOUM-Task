export interface OfferDiscount {
  discount_cut_off: number;
  discount_percentage: number;
  discount_price: number;
}

export interface OfferPackage {
  package_id: number;
  quantity: number;
  special_package: boolean;
  price_per_piece: number;
}

export interface Offer {
  offer_id: number;
  min_order_quantity: number;
  max_order_quantity: number;
  title: string;
  price: number;
  product_rate: number;
  product_image: string;
  product_variant_id: number;
  price_after_discount: number;
  currency: string;
  free_shipping: number;
  seller_name: string;
  seller_image: string;
  seller_id: number;
  seller_response_rate: number;
  in_cart: number;
  in_favorite?: number;
  available_quantity: number;
  activeDiscount: OfferDiscount;
  packages: OfferPackage[];
}
