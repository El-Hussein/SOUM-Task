import {combineReducers} from 'redux';
import entitiesReducer from './entities/entitiesReducer';
import UIReducer from './UI/UIReducer';

const reducers = combineReducers({
  UI: UIReducer,
  entities: entitiesReducer,
});

export default reducers;
