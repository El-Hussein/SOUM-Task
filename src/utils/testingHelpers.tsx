import {FakeRootState} from '@app-types/RootState';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {Action} from 'redux';
import {runSaga} from 'redux-saga';
import {configureStore} from '../state/store';

export async function customRunSaga<T>(
  fakeState: FakeRootState,
  sagaFunc: (...sagaArgs: any[]) => Generator,
  ...args: T[]
) {
  const dispatchedActions: Action[] = [];
  const fakeStore = {
    getState: () => fakeState,
    dispatch: (action: Action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, sagaFunc, ...args);
  return dispatchedActions;
}

export const renderWithNavigation = (component: React.ReactElement) => {
  const ComponentWithNavigation = () => (
    <NavigationContainer>{component}</NavigationContainer>
  );
  return render(<ComponentWithNavigation />);
};

export const renderWithStateAndNavigation = (
  component: React.ReactElement,
  {initialState}: any = {},
) => {
  const store = configureStore(initialState);
  const ComponentWithStateAndNavigation = () => (
    <Provider store={store}>{component}</Provider>
  );
  return render(<ComponentWithStateAndNavigation />);
};
