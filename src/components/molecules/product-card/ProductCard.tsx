import {FC, useCallback} from 'react';
import {Product} from '@app-types';
import styles from '@designSystem/styles';
import {TouchableOpacity} from 'react-native';
import AppText from '@components/atoms/app-text/AppText';
import CachedImage from '@components/atoms/cached-image/CachedImage';

interface ProductCardProps {
  product: Product;
  onPress?: (productId: number) => void;
  selected?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({product, onPress, selected}) => {
  const pressProduct = useCallback(() => {
    if (onPress) {
      onPress(product.productId);
    }
  }, [onPress, product]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      testID={'product-card' + product.productId}
      onPress={pressProduct}
      style={[
        styles['column-container-center'],
        styles['bg-white'],
        styles[selected ? 'border-primary' : 'border-gray'],
        styles['rounded-md'],
        styles['mr-sm'],
        styles['p-md'],
      ]}>
      <AppText styles={[styles['text-subtitle2'], styles['text-light']]}>
        {product.title}
      </AppText>
    </TouchableOpacity>
  );
};

export default ProductCard;
