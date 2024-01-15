import styles from '@designSystem/styles';
import {View} from 'react-native';
import {PlaceholderLine, PlaceholderMedia} from 'rn-placeholder';

const CategoryCardSkelton = () => {
  return (
    <View
      style={[
        styles['column-container-center'],
        styles['bg-white'],
        styles['border-gray'],
        styles['rounded-md'],
        styles['mr-sm'],
        styles['w-lg'],
        styles['p-md'],
      ]}>
      <PlaceholderMedia
        style={(styles['w-lg'], styles['h-xs'], styles['mb-sm'])}
      />
      <PlaceholderLine style={(styles['w-full'], styles['h-2'])} />
    </View>
  );
};

export default CategoryCardSkelton;
