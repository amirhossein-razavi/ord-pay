import {
  ADD_BASKET_COUNT,
} from './types';

export const onAddBasketCount = (prop) => async (dispatch) => {
  dispatch({ type: ADD_BASKET_COUNT, payload: {} });
};
