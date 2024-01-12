import React from 'react';
import { Image } from 'react-native';
import styles from '@designSystem/styles';

const Logo = () => {
  return (
    <Image
      testID="client-logo"
      source={{
        uri: 'https://res.cloudinary.com/http-www-pickspace-net/image/upload/v1697137414/uqjejkssjudnwpxbcqqm.png',
      }}
      style={[styles['w-full'], styles['h-xs'], styles['mb-lg']]}
      resizeMode="contain"
    />
  );
};

export default Logo;
