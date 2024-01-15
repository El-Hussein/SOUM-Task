import {getHomeOffers} from '@actions';
import {
  selectLoadingBrands,
  selectLoadingOffers,
  selectLoadingProducts,
  selectOffers,
  selectSelectedProductIds,
} from '@selectors';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useOfferList = () => {
  const dispatch = useDispatch();
  const homeOffers = useSelector(selectOffers);
  const selectedProductIds = useSelector(selectSelectedProductIds);

  const loadingBrands = useSelector(selectLoadingBrands);
  const loadingOffers = useSelector(selectLoadingOffers);
  const loadingProducts = useSelector(selectLoadingProducts);

  useEffect(() => {
    if (selectedProductIds.length) dispatch(getHomeOffers(selectedProductIds));
  }, [selectedProductIds.length]);

  return {
    homeOffers,
    loading: loadingBrands || loadingProducts || loadingOffers,
  };
};
