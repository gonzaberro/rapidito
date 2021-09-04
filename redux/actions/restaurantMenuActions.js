import { MENU_TYPES } from "../types";

export const setRestaurantMenu = (data) => dispatch => {
  dispatch({
    type: MENU_TYPES.RESTAURANT_MENU_DATA,
    payload: data
  });
}