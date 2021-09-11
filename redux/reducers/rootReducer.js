import { combineReducers } from "redux"
import restaurantMenuReducer from "./restaurantMenuReducer"
import shoppingCartReducer from "./shoppingCartReducer";

const rootReducer = combineReducers({
    restaurantMenu: restaurantMenuReducer,
    shoppingCart: shoppingCartReducer,
})

export default rootReducer;