import {
  EntitiesState,
  FakeEntitiesState,
  FakeHomeState,
  HomeState,
} from './state';

export interface UIState {
  home: HomeState;
}
export interface FakeUIState {
  home?: FakeHomeState;
}

export interface RootState {
  UI: UIState;
  entities: EntitiesState;
}

export interface FakeRootState {
  UI?: FakeUIState;
  entities?: FakeEntitiesState;
}
