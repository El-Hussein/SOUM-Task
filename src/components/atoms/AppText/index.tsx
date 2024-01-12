import React, { FC } from 'react';
import { TextStyle, TextProps, Text } from 'react-native';
import APP_STYLES from '@designSystem/styles';

interface Props extends TextProps {
  styles?: TextStyle | TextStyle[];
}

export const AppText: FC<Props> = props => {
  const { children, styles, testID } = props;

  return (
    <Text
      {...props}
      testID={testID}
      style={[
        APP_STYLES['text-normal'],
        APP_STYLES['text-black'],
        ...(styles ? (Array.isArray(styles) ? styles : [styles]) : []),
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
