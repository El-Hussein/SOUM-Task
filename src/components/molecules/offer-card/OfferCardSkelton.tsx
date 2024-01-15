import styles from '@designSystem/styles';
import {View} from 'react-native';
import {PlaceholderLine, PlaceholderMedia} from 'rn-placeholder';

const OfferCardSkelton = () => {
  return (
    <View
      style={[
        styles['column-container-center'],
        styles['bg-white'],
        styles['border-gray'],
        styles['rounded-md'],
        styles['mr-sm'],
        styles['p-md'],
        styles['m-sm'],
      ]}>
      <PlaceholderMedia
        style={[styles['w-md'], styles['h-lg'], styles['mb-sm']]}
      />
      <PlaceholderLine style={(styles['w-full'], styles['h-2'])} />
      <PlaceholderLine style={(styles['w-full'], styles['h-2'])} />
    </View>
  );
};

export default OfferCardSkelton;
