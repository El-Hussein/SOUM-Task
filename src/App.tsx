import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import MainApp from './navigation/mainApp';
import store from './state/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
