import {FC, useCallback} from 'react';
import {Offer} from '@app-types';
import styles from '@designSystem/styles';
import {TouchableOpacity} from 'react-native';
import AppText from '@components/atoms/app-text/AppText';
import CachedImage from '@components/atoms/cached-image/CachedImage';
import AppIcon, {AppIconType} from '@components/atoms/AppIcon';
import colors from '@designSystem/colors';

interface OfferCardProps {
  offer: Offer;
  onPress?: (offerId: number) => void;
  selected?: boolean;
}

const OfferCard: FC<OfferCardProps> = ({offer, onPress, selected}) => {
  const pressOffer = useCallback(() => {
    if (onPress) {
      onPress(offer.offerId);
    }
  }, [onPress, offer]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      testID={'offer-card' + offer.offerId}
      onPress={pressOffer}
      style={[
        styles['column-container-center'],
        styles['bg-white'],
        styles['border-gray'],
        styles['rounded-md'],
        styles['mr-sm'],
        styles['p-md'],
        styles['m-sm'],
      ]}>
      <AppIcon
        style={[
          styles['absolute'],
          styles['top-2'],
          styles['right-2'],
          styles['z-top'],
        ]}
        type={AppIconType.MATERIAL_COMMUNITY}
        name={offer.in_favorite ? 'heart' : 'heart-outline'}
        size={30}
        color={offer.in_favorite ? colors['error'] : colors['gray-border']}
      />
      <AppIcon
        style={[
          styles['absolute'],
          styles['top-2'],
          styles['left-2'],
          styles['z-top'],
        ]}
        type={AppIconType.MATERIAL_COMMUNITY}
        name={offer.in_cart ? 'cart' : 'cart-outline'}
        size={30}
        color={offer.in_cart ? colors['success'] : colors['gray-border']}
      />
      <CachedImage
        style={[styles['w-2xl'], styles['h-lg']]}
        uri={offer.image}
      />
      <AppText
        numberOfLines={2}
        styles={[
          styles['text-subtitle2'],
          styles['text-light'],
          styles['mt-md'],
          styles['mb-sm'],
        ]}>
        {offer.title}
      </AppText>
      <AppText styles={[styles['text-subtitle'], styles['text-main']]}>
        {offer.price} EGP
      </AppText>
    </TouchableOpacity>
  );
};

export default OfferCard;
