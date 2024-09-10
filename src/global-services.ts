import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-protifolio.vercel.app",
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});
