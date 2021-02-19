import {
  GET_MENU,
} from './types';

import SendRequest from '../../globalFunctions/ConnectServer'

export const getMenu = (prop) => async (dispatch) => {

  return SendRequest("/api/services/app/Menu/GetAll", "GET", null, null, dispatch)
    .then(async (res) => {
      console.log(res)
      dispatch({ type: GET_MENU, payload: res });
    })
    .catch((error) => {
      console.log(error)
    });

};
