import {combineReducers} from 'redux';
import homeReducer from './home/homeReducer';
import {UIState} from '@app-types/RootState';

const UIReducer = combineReducers<UIState>({
  home: homeReducer,
});

export default UIReducer;
