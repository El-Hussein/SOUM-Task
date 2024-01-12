import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainApp from './navigation/mainApp';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}

export default App;
