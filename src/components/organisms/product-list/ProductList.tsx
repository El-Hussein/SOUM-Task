import {useCallback} from 'react';
import {Product} from '@app-types';
import ProductCard from '@components/molecules/product-card/ProductCard';
import styles from '@designSystem/styles';
import {FlatList, View} from 'react-native';
import {useProductList} from './useProductList';
import EmptyList from '@components/atoms/empty-list/EmptyList';
import ProductListSkelton from './ProductListSkelton';

const ProductList = () => {
  const {homeProducts, loading, selectProduct, selectedProductIds} =
    useProductList();

  const renderProduct = useCallback(
    ({item}: {item: Product}) => (
      <ProductCard
        selected={selectedProductIds.includes(item.productId)}
        onPress={selectProduct}
        product={item}
      />
    ),
    [selectedProductIds],
  );

  const keyExtractor = useCallback(
    (item: Product) => item.productId.toString(),
    [],
  );

  if (loading) return <ProductListSkelton />;

  if (homeProducts.length === 0)
    return <EmptyList message="No products found" />;

  return (
    <View style={[styles['row-container-center']]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={homeProducts}
        renderItem={renderProduct}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ProductList;
