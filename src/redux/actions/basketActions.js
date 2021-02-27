import {
  ADD_BASKET,
  DECREASE_BASKET,
} from './types';

export const onAddBasket = (prop) => async (dispatch) => {
  dispatch({ type: ADD_BASKET, payload: { prop } });
};

export const onDecreaseBasket = (prop) => async (dispatch) => {
  dispatch({ type: DECREASE_BASKET, payload: { prop } });
};
