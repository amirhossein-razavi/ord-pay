import {
  GET_MENU,
  GET_SHOP_DETAILS,
  ON_LOADING
} from './types';

import SendRequest from '../../globalFunctions/ConnectServer'

export const getShopDetails = (prop) => async (dispatch) => {

  dispatch({ type: ON_LOADING, payload: true });
  
  return SendRequest(`/api/services/app/Shop/GetByUniqueName?UniqueName=${prop}`, "GET", null, null, dispatch)
    .then(async (res) => {
      dispatch({ type: ON_LOADING, payload: false });
      dispatch({ type: GET_SHOP_DETAILS, payload: res });
      return res
    })
    .catch((error) => {
      dispatch({ type: ON_LOADING, payload: false });
      console.log(error)
    });

};

export const getMenu = (prop) => async (dispatch) => {

  dispatch({ type: ON_LOADING, payload: true });

  return SendRequest(`/api/services/app/Menu/GetAll?ShopId=${prop}`, "GET", null, null, dispatch)
    .then(async (res) => {
      dispatch({ type: ON_LOADING, payload: false });
      dispatch({ type: GET_MENU, payload: res });
    })
    .catch((error) => {
      dispatch({ type: ON_LOADING, payload: false });
      console.log(error)
    });

};
