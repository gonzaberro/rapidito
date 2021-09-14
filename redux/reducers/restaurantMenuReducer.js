import { MENU_TYPES } from "../types";

const initialState = {
    restaurantInfo : {},
    menuProducts : {},
    topProducts : [],
    loading:true,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case MENU_TYPES.RESTAURANT_MENU_DATA:
        return {
          ...state,
          restaurantInfo : action.payload.restaurante,
          menuProducts : action.payload.productos,
          topProducts : action.payload.platos_recomendados,
        };
      case MENU_TYPES.SET_LOADING:
        return {
          ...state, 
          loading: action.payload,
        }
         
  
      default:
        return state;
    }
  }
  