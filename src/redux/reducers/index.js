import { combineReducers } from 'redux';
import loading from './loading';
import basketReducer from './basketReducer';
import restaurantMenu from './restaurantMenuReducer';
import notification from './notificationReducer';

export default combineReducers({
  basket: basketReducer,
  menu: restaurantMenu,
  notification,
  loading,
});