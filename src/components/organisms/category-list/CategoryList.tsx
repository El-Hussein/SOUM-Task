import {useCallback} from 'react';
import {Category} from '@app-types';
import CategoryCard from '@components/molecules/category-card/CategoryCard';
import styles from '@designSystem/styles';
import {FlatList, View} from 'react-native';
import {useCategoryList} from './useCategoryList';
import CategoryListSkelton from './CategoryListSkelton';
import EmptyList from '@components/atoms/empty-list/EmptyList';

const CategoryList = () => {
  const {
    homeCategories,
    selectCategory,
    loadingCategories,
    loadingBrands,
    selectedCategoryId,
  } = useCategoryList();

  const renderCategory = useCallback(
    ({item}: {item: Category}) => (
      <CategoryCard
        selected={selectedCategoryId === item.categoryId}
        disabled={loadingBrands}
        onPress={selectCategory}
        category={item}
      />
    ),
    [selectedCategoryId],
  );

  const keyExtractor = useCallback(
    (item: Category) => item.categoryId.toString(),
    [],
  );

  if (loadingCategories) return <CategoryListSkelton />;

  if (!homeCategories.length)
    return <EmptyList message="No Categories Available" />;

  return (
    <View style={[styles['row-container-center'], styles['mt-lg']]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={homeCategories}
        renderItem={renderCategory}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default CategoryList;
