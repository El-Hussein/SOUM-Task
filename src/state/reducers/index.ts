import {combineReducers} from 'redux';
import entitiesReducer from './entities/entitiesReducer';
import global from './global';
import UIReducer from './UI/UIReducer';

const reducers = combineReducers({
  global,
  UI: UIReducer,
  entities: entitiesReducer,
});

export default reducers;
