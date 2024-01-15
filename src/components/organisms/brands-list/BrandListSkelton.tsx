import {useCallback} from 'react';
import {FlatList} from 'react-native';
import BrandCardSkelton from '@components/molecules/brand-card/BrandCardSkelton';
import styles from '@designSystem/styles';

const BrandListSkelton = () => {
  const renderBrand = useCallback(() => <BrandCardSkelton />, []);

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

export default BrandListSkelton;
