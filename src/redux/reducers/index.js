import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import restaurantMenu from './restaurantMenu';
import notification from './notificationReducer';

export default combineReducers({
  basket: basketReducer,
  menu: restaurantMenu,
  notification,
});