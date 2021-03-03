import {
  ADD_BASKET,
  DECREASE_BASKET,
} from './types';
import { getItem } from '../../globalFunctions/asyncLocalStorage';

export const onAddBasket = (prop) => async (dispatch, getState) => {
  const shopData = getState().menu.shop
  const localBasket = await getItem("basket")
  dispatch({ type: ADD_BASKET, payload: { prop, localBasket: localBasket ? JSON.parse(localBasket) : {}, shopData } });
};

export const onDecreaseBasket = (prop) => async (dispatch, getState) => {
  const shopData = getState().menu.shop
  const localBasket = await getItem("basket")
  dispatch({ type: DECREASE_BASKET, payload: { prop, localBasket: localBasket ? JSON.parse(localBasket) : {}, shopData } });
};
