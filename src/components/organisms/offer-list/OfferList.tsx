import {useCallback} from 'react';
import {Offer} from '@app-types';
import OfferCard from '@components/molecules/offer-card/OfferCard';
import styles from '@designSystem/styles';
import {FlatList, View} from 'react-native';
import {useOfferList} from './useOfferList';
import OfferListSkelton from './OfferListSkelton';
import EmptyList from '@components/atoms/empty-list/EmptyList';

const OfferList = () => {
  const {homeOffers, loading} = useOfferList();
  const renderOffer = useCallback(
    ({item}: {item: Offer}) => <OfferCard offer={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: Offer) => item.offerId.toString(),
    [],
  );

  if (loading) {
    return <OfferListSkelton />;
  }

  if (!homeOffers.length) {
    return (
      <EmptyList
        style={[styles['mt-sm']]}
        message="No Offers Available For This Criteria"
      />
    );
  }

  return (
    <View style={[styles['mt-xl'], styles['w-full']]}>
      <FlatList
        key={'offers-list'}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={homeOffers}
        renderItem={renderOffer}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default OfferList;
