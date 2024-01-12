import {HomeState} from '@app-types';
import {combineReducers} from 'redux';
import homeSectionReducer from './home-sections/homeSectionReducer';

const homeReducer = combineReducers<HomeState>({
  homeSections: homeSectionReducer,
});

export default homeReducer;
