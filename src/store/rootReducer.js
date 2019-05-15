import { combineReducers } from 'redux';
import punkReducer from './punk/reducer';
import favouritesReducer from './favourites/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  punk: punkReducer,
  user: userReducer,
});

export default rootReducer;
