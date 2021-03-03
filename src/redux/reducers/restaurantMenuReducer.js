import {
  GET_MENU,
  GET_SHOP_DETAILS,
  ADD_BASKET,
} from '../actions/types';

const initialState = {
  shop: {},
  menu: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SHOP_DETAILS: {

      var shop = action.payload;

      return {
        ...state,
        shop
      }
    }
    case GET_MENU: {

      var menu = action.payload;

      // if (localStorage.getItem("basket")) {
      //   const localData = JSON.parse(localStorage.getItem("basket"))

      //   for (var i = 0; i < localData.length; i++) {
      //     const findMenuItem = menu.result.items.findIndex(j => j.id == localData[i].menuId);
      //     const findItem = menu.result.items[findMenuItem].menuItems.findIndex(j => j.id === localData[i].id);
      //     menu.result.items[findMenuItem].menuItems[findItem].count = localData[i].count
      //   }
      // }

      return {
        ...state,
        menu
      }
    }
    // case ADD_BASKET: {

    //   const data = action.payload.prop;
    //   var newData = state.menu;

    //   const findMenuItem = newData.result.items.findIndex(i => i.id == data.menuId);
    //   const findItem = newData.result.items[findMenuItem].menuItems.findIndex(i => i.id === data.id);

    //   if (newData.result.items[findMenuItem].menuItems[findItem].count) {
    //     newData.result.items[findMenuItem].menuItems[findItem].count += 1
    //   } else {
    //     newData.result.items[findMenuItem].menuItems[findItem].count = 1
    //   }

    //   return {
    //     ...state,
    //     menu: newData
    //   }
    // }
    default:
      return state;
  }
}
