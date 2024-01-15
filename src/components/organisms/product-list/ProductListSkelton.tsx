import {useCallback} from 'react';
import {FlatList} from 'react-native';
import ProductCardSkelton from '@components/molecules/product-card/ProductCardSkelton';
import styles from '@designSystem/styles';

const ProductListSkelton = () => {
  const renderBrand = useCallback(() => <ProductCardSkelton />, []);

  const keyExtractor = useCallback((item: number) => item.toString(), []);
  return (
    <FlatList
      contentContainerStyle={[styles['my-md']]}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={[1, 2, 3, 4, 5]}
      renderItem={renderBrand}
      keyExtractor={keyExtractor}
    />
  );
};

export default ProductListSkelton;
