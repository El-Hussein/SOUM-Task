import {FC} from 'react';
import {View} from 'react-native';
import styles from '@designSystem/styles';
import AppText from '../app-text/AppText';

interface EmptyListProps {
  message: string;
  style?: any;
}

const EmptyList: FC<EmptyListProps> = ({message, style}) => {
  return (
    <View
      style={[
        styles['h-xs'],
        styles['row-container-center'],
        ...(style ?? []),
      ]}>
      <AppText>{message}</AppText>
    </View>
  );
};

export default EmptyList;
