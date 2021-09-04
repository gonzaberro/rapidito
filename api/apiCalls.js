import { apiPython } from "./api";

function getRestaurantMenu(restaurantId) {
  return apiPython.get("/get_productos_restaurante_categoria?restaurante="+restaurantId);
}

export const apiCalls = {
  getRestaurantMenu
};
