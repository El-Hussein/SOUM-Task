import React, { FC } from 'react';
import {
  TextStyle,
  TextProps,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from '@designSystem/styles';
import colors from '@designSystem/colors';

interface Props extends TextProps {
  title: string;
  containerStyles?: TextStyle | TextStyle[];
  textStyles?: TextStyle | TextStyle[];
  type?: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline';
  loading?: boolean;
}

export const AppButton: FC<Props> = props => {
  const {
    title,
    containerStyles,
    textStyles,
    type = 'primary',
    loading,
    testID,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles[`button-${type}`],
        { flexDirection: 'row', alignItems: 'center' },
        ...(containerStyles
          ? Array.isArray(containerStyles)
            ? containerStyles
            : [containerStyles]
          : []),
      ]}>
      <Text
        style={[
          styles['text-normal'],
          type.includes('outline')
            ? styles['text-black']
            : styles['text-white'],
          ...(textStyles
            ? Array.isArray(textStyles)
              ? textStyles
              : [textStyles]
            : []),
        ]}>
        {title}
      </Text>
      <ActivityIndicator
        style={styles['ml-md']}
        animating={loading}
        size="small"
        color={type.includes('outline') ? colors.error : colors.white}
      />
    </TouchableOpacity>
  );
};

export default AppButton;
