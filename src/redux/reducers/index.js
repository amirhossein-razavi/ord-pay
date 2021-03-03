import { combineReducers } from 'redux';
import loading from './loading';
import basketReducer from './basketReducer';
import restaurantMenu from './restaurantMenuReducer';
import shops from './shopsReducer';
import notification from './notificationReducer';

export default combineReducers({
  basket: basketReducer,
  menu: restaurantMenu,
  shops,
  notification,
  loading,
});