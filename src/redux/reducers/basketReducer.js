import {
  ADD_BASKET_COUNT,
} from '../actions/types';

const initialState = {
  basketCount: localStorage.getItem('basketCount'),
};

export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_BASKET_COUNT: {
      return {
        ...state,
        basketCount: parseInt(state.basketCount) + 1
      }
    }
    default:
      return state;
  }
}
