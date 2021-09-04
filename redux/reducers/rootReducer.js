import { combineReducers } from "redux"
import restaurantMenuReducer from "./restaurantMenuReducer"

const rootReducer = combineReducers({
    restaurantMenu: restaurantMenuReducer
})

export default rootReducer;