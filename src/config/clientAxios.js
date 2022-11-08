import axios from "axios";

const defaultOptions = {
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const clientAxios = axios.create(defaultOptions);
