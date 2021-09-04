import axios from "axios";

export const apiPython = axios.create({
  baseURL: "https://pedidosrapiditos.herokuapp.com/api",
  timeout: 10000000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
