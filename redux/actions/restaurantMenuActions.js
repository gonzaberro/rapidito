import { MENU_TYPES } from "../types";

export const setRestaurantMenu = (data) => dispatch => {
  dispatch({
    type: MENU_TYPES.RESTAURANT_MENU_DATA,
    payload: data
  });
}


export const setLoading = (loading) => dispatch => {
  dispatch({
    type: MENU_TYPES.SET_LOADING,
    payload: loading
  });
}