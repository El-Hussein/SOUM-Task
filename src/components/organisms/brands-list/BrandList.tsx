import {useCallback} from 'react';
import {Brand} from '@app-types';
import BrandCard from '@components/molecules/brand-card/BrandCard';
import styles from '@designSystem/styles';
import {FlatList, View} from 'react-native';
import {useBrandList} from './useBrandList';
import Loader from '@components/atoms/loader/Loader';
import BrandListSkelton from './BrandListSkelton';
import EmptyList from '@components/atoms/empty-list/EmptyList';

const BrandList = () => {
  const {homeBrands, loading, loadingProducts, selectBrand, selectedBrandId} =
    useBrandList();
  const renderBrand = useCallback(
    ({item}: {item: Brand}) => (
      <BrandCard
        selected={selectedBrandId === item.brandId}
        disabled={loadingProducts}
        onPress={selectBrand}
        brand={item}
      />
    ),
    [selectedBrandId],
  );

  const keyExtractor = useCallback(
    (item: Brand) => item.brandId.toString(),
    [],
  );

  if (loading) {
    return <BrandListSkelton />;
  }

  if (!homeBrands.length) {
    return <EmptyList message="No Brands Available" />;
  }

  return (
    <View style={[styles['row-container-center'], styles['my-md']]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={homeBrands}
        renderItem={renderBrand}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default BrandList;
