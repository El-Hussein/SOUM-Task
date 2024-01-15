import {useCallback} from 'react';
import {FlatList} from 'react-native';
import OfferCardSkelton from '@components/molecules/offer-card/OfferCardSkelton';
import styles from '@designSystem/styles';

const OfferListSkelton = () => {
  const renderOffer = useCallback(() => <OfferCardSkelton />, []);

  const keyExtractor = useCallback((item: number) => item.toString(), []);
  return (
    <FlatList
      contentContainerStyle={[styles['mt-xl']]}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      data={[1, 2, 3, 4]}
      renderItem={renderOffer}
      keyExtractor={keyExtractor}
    />
  );
};

export default OfferListSkelton;
