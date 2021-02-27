import {
  ADD_BASKET,
  DECREASE_BASKET
} from '../actions/types';
import { setItem } from '../../globalFunctions/asyncLocalStorage';

const initialState = {
  basket: localStorage.getItem('basket') && JSON.parse(localStorage.getItem('basket')) || [],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_BASKET: {
      const data = action.payload.prop;

      const newBasket = state.basket;

      const exitFood = newBasket.findIndex((i) => i.id == data.id);
      if (exitFood !== -1) {
        if (newBasket[exitFood].count) {
          newBasket[exitFood].count += 1
        }
      } else {
        data.count = 1
        newBasket.unshift(data);
      }

      setItem("basket", JSON.stringify(newBasket))

      return {
        ...state,
        basket: newBasket
      }
    }

    case DECREASE_BASKET: {
      const data = action.payload.prop;

      var newBasket = state.basket;

      const exitFood = newBasket.findIndex((i) => i.id == data.id);
      if (newBasket[exitFood].count > 1) {
        newBasket[exitFood].count -= 1
      } else {
        newBasket = newBasket.filter(i => i.id !== data.id)
      }

      setItem("basket", JSON.stringify(newBasket))

      return {
        ...state,
        basket: newBasket
      }
    }
    default:
      return state;
  }
}
