import {
  ADD_BASKET,
  DECREASE_BASKET
} from '../actions/types';
import { setItem } from '../../globalFunctions/asyncLocalStorage';

const initialState = {
  basket: localStorage.getItem('basket') && JSON.parse(localStorage.getItem('basket')) || {},
};


export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_BASKET: {
      const data = action.payload.prop;
      const localBasket = action.payload.localBasket;
      const shopData = action.payload.shopData;

      const newBasket = Object.keys(state.basket).length ? state.basket[shopData.result.uniqueName] : []

      const exitFood = newBasket.findIndex((i) => i.id == data.id);
      if (exitFood !== -1) {
        if (newBasket[exitFood].count) {
          newBasket[exitFood].count += 1
        }
      } else {
        data.count = 1
        newBasket.unshift(data);
      }

      const localData = {
        ...localBasket,
        [shopData.result.uniqueName]: newBasket
      }
      setItem("basket", JSON.stringify(localData))

      return {
        ...state,
        basket: {
          ...state.basket,
          [shopData.result.uniqueName]: newBasket
        }
      }
    }

    case DECREASE_BASKET: {
      const data = action.payload.prop;
      const localBasket = action.payload.localBasket;
      const shopData = action.payload.shopData;

      var newBasket = state.basket[shopData.result.uniqueName];

      const exitFood = newBasket.findIndex((i) => i.id == data.id);
      if (newBasket[exitFood].count > 1) {
        newBasket[exitFood].count -= 1
      } else {
        newBasket[exitFood].count -= 1
        newBasket = newBasket.filter(i => i.id !== data.id)
      }

      const localData = {
        ...localBasket,
        [shopData.result.uniqueName]: newBasket
      }

      setItem("basket", JSON.stringify(localData))

      return {
        ...state,
        basket: {
          ...state.basket,
          [shopData.result.uniqueName]: newBasket
        }
      }
    }
    default:
      return state;
  }
}
