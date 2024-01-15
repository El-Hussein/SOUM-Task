import {getHomeCategories, setSelectedCategory} from '@actions';
import {
  selectCategories,
  selectLoadingBrands,
  selectLoadingCategories,
  selectSelectedCategoryId,
} from '@selectors';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useCategoryList = () => {
  const dispatch = useDispatch();
  const homeCategories = useSelector(selectCategories);
  const loadingBrands = useSelector(selectLoadingBrands);
  const loadingCategories = useSelector(selectLoadingCategories);
  const selectedCategoryId = useSelector(selectSelectedCategoryId);

  const selectCategory = useCallback((categoryId: number) => {
    dispatch(setSelectedCategory(categoryId));
  }, []);

  useEffect(() => {
    dispatch(getHomeCategories());
  }, []);

  return {
    homeCategories,
    selectCategory,
    loadingBrands,
    loadingCategories,
    selectedCategoryId,
  };
};
