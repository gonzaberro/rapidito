import axios from "axios";

export const apiPython = axios.create({
  baseURL: "https://pedidosrapiditos.herokuapp.com/api",
  timeout: 10000000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiGeolocation = axios.create({
  baseURL: "http://api.positionstack.com/v1/",
  timeout: 10000000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
