/* eslint-disable import/prefer-default-export */
import { apiPython } from './api';

function getRestaurantMenu(restaurantId) {
  return apiPython.get(`/get_productos_restaurante_categoria?restaurante=${restaurantId}`);
}

function getRestaurants(latitud,longitud) {
  return apiPython.get(`get_restaurantes_filtered?latitud=${latitud}&longitud=${longitud}`);
}

export const apiCalls = {
  getRestaurantMenu,
  getRestaurants,
};
