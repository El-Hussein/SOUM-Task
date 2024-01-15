import {getHomeBrands, setSelectedBrand} from '@actions';
import {
  selectBrands,
  selectLoadingBrands,
  selectLoadingProducts,
  selectSelectedBrandId,
  selectSelectedCategoryId,
} from '@selectors';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useBrandList = () => {
  const dispatch = useDispatch();
  const loadingBrands = useSelector(selectLoadingBrands);
  const loadingProducts = useSelector(selectLoadingProducts);
  const selectedCategoryId = useSelector(selectSelectedCategoryId);
  const selectedBrandId = useSelector(selectSelectedBrandId);
  const homeBrands = useSelector(selectBrands);

  const selectBrand = useCallback((categoryId: number) => {
    dispatch(setSelectedBrand(categoryId));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) dispatch(getHomeBrands(selectedCategoryId));
  }, [selectedCategoryId]);

  return {
    homeBrands,
    selectBrand,
    loading: loadingBrands,
    loadingProducts,
    selectedBrandId,
  };
};
