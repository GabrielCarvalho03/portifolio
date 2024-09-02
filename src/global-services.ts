import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_DATABASE,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});
