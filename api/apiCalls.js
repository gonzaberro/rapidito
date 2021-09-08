/* eslint-disable import/prefer-default-export */
import { apiPython } from './api';

function getRestaurantMenu(restaurantId) {
  return apiPython.get(`/get_productos_restaurante_categoria?restaurante=${restaurantId}`);
}

function getRestaurants(name) {
  return apiPython.get(`get_restaurantes_filtered?=${name}`);
}

export const apiCalls = {
  getRestaurantMenu,
  getRestaurants,
};
