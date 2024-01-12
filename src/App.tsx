import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainApp from './navigation/MainApp';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}

export default App;
