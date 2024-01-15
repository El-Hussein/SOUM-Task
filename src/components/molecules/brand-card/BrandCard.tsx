import {FC, useCallback} from 'react';
import {Brand} from '@app-types';
import styles from '@designSystem/styles';
import {TouchableOpacity} from 'react-native';
import CachedImage from '@components/atoms/cached-image/CachedImage';

interface BrandCardProps {
  brand: Brand;
  onPress?: (brandId: number) => void;
  selected?: boolean;
  disabled?: boolean;
}

const BrandCard: FC<BrandCardProps> = ({
  brand,
  disabled,
  onPress,
  selected,
}) => {
  const pressBrand = useCallback(() => {
    if (onPress) {
      onPress(brand.brandId);
    }
  }, [onPress, brand]);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      testID={'brand-card' + brand.brandId}
      onPress={pressBrand}
      style={[
        styles['column-container-center'],
        styles['bg-white'],
        styles[selected ? 'border-primary' : 'border-gray'],
        styles['rounded-md'],
        styles['mr-sm'],
        styles['w-lg'],
        styles['p-md'],
      ]}>
      <CachedImage
        style={[styles['w-md'], styles['h-sm']]}
        resizeMode="contain"
        uri={brand.image}
      />
    </TouchableOpacity>
  );
};

export default BrandCard;
