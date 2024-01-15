import {useCallback} from 'react';
import {FlatList} from 'react-native';
import CategoryCardSkelton from '@components/molecules/category-card/CategoryCardSkelton';
import styles from '@designSystem/styles';

const CategoryListSkelton = () => {
  const renderCategory = useCallback(() => <CategoryCardSkelton />, []);

  const keyExtractor = useCallback((item: number) => item.toString(), []);
  return (
    <FlatList
      contentContainerStyle={[styles['my-md']]}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={[1, 2, 3, 4, 5]}
      renderItem={renderCategory}
      keyExtractor={keyExtractor}
    />
  );
};

export default CategoryListSkelton;
