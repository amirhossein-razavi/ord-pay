import {
  GET_MENU,
} from '../actions/types';

const initialState = {
  menu: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU: {
      const menu = action.payload;
      console.log(menu)
      return {
        ...state,
        menu
      }
    }
    default:
      return state;
  }
}
