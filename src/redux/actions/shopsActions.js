import {
    GET_SHOPS,
    ON_LOADING
} from './types';

import SendRequest from '../../globalFunctions/ConnectServer'

export const getShops = (prop) => async (dispatch) => {

    dispatch({ type: ON_LOADING, payload: true });

    return SendRequest("/api/services/app/Shop/GetAll", "GET", null, null, dispatch)
        .then(async (res) => {
            dispatch({ type: ON_LOADING, payload: false });
            dispatch({ type: GET_SHOPS, payload: res });
        })
        .catch((error) => {
            dispatch({ type: ON_LOADING, payload: false });
            console.log(error)
        });

};
