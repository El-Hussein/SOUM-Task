import {ActivityIndicator, View} from 'react-native';
import styles from '@designSystem/styles';

const Loader = () => {
  return (
    <View style={[styles['h-xs'], styles['row-container-center']]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loader;
