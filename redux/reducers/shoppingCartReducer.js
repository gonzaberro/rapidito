import { SHOPPING_CART_TYPES } from "../types";

const initialState = {
    items : []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SHOPPING_CART_TYPES.ADD_CART_ITEMS:
      
        return {
          ...state,
          items : action.payload,
        };
         
  
      default:
        return state;
    }
  }
  