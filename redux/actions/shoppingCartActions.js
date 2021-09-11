import { SHOPPING_CART_TYPES } from "../types";

export const addItemsToShoppingCart = (items) => dispatch => {

  dispatch({
    type: SHOPPING_CART_TYPES.ADD_CART_ITEMS,
    payload: items
  });
}