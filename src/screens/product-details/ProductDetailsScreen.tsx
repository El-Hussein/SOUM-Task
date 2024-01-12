// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default HomeScreen;
