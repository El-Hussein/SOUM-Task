import {EntitiesState, HomeState} from './state';

export interface UIState {
  home: HomeState;
}
export interface RootState {
  UI: UIState;
  entities: EntitiesState;
}
