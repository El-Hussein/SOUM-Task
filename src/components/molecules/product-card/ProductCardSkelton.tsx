import styles from '@designSystem/styles';
import {View} from 'react-native';
import {PlaceholderLine} from 'rn-placeholder';

const ProductCardSkelton = () => {
  return (
    <View
      style={[
        styles['column-container-center'],
        styles['bg-white'],
        styles['border-gray'],
        styles['rounded-md'],
        styles['mr-sm'],
        styles['w-lg'],
        styles['p-sm'],
      ]}>
      <PlaceholderLine style={[styles['w-md'], styles['h-5']]} />
    </View>
  );
};

export default ProductCardSkelton;
