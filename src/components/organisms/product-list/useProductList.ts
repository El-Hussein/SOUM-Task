import {getHomeProducts, selectAllProducts, setSelectedProduct} from '@actions';
import {
  selectProducts,
  selectLoadingProducts,
  selectSelectedBrandId,
  selectLoadingBrands,
  selectSelectedProductIds,
} from '@selectors';
import {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useProductList = () => {
  const dispatch = useDispatch();
  const loadingProducts = useSelector(selectLoadingProducts);
  const loadingBrands = useSelector(selectLoadingBrands);
  const selectedBrandId = useSelector(selectSelectedBrandId);
  const selectedProductIds = useSelector(selectSelectedProductIds);
  const homeProducts = useSelector(selectProducts);

  const allHomeProducts = useMemo(() => {
    if (selectedBrandId && homeProducts.length > 0) {
      return [
        {
          productId: 0,
          title: 'All products',
          brandId: selectedBrandId,
        },
        ...homeProducts,
      ];
    }
    return homeProducts;
  }, [homeProducts, selectedBrandId]);

  const selectProduct = useCallback((productId: number) => {
    if (productId === 0) {
      dispatch(selectAllProducts());
      return;
    }
    dispatch(setSelectedProduct(productId));
  }, []);

  useEffect(() => {
    if (selectedBrandId) dispatch(getHomeProducts(selectedBrandId));
  }, [selectedBrandId]);

  return {
    homeProducts: allHomeProducts,
    selectProduct,
    loading: loadingProducts || loadingBrands,
    selectedProductIds,
  };
};
