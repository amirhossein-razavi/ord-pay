import {
  GET_MENU,
  ON_LOADING
} from './types';

import SendRequest from '../../globalFunctions/ConnectServer'

export const getMenu = (prop) => async (dispatch) => {

  dispatch({ type: ON_LOADING, payload: true });

  return SendRequest("/api/services/app/Menu/GetAll", "GET", null, null, dispatch)
    .then(async (res) => {
      dispatch({ type: ON_LOADING, payload: false });
      dispatch({ type: GET_MENU, payload: res });
    })
    .catch((error) => {
      dispatch({ type: ON_LOADING, payload: false });
      console.log(error)
    });

};
