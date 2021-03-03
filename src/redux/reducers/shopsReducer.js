import {
  GET_SHOPS,
} from '../actions/types';

const initialState = {
  shop: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SHOPS: {

      var shop = action.payload;

      return {
        ...state,
        shop
      }
    }
    default:
      return state;
  }
}
