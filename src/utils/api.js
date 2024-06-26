import axios from "axios";

export const api_edamam = axios.create({
  baseURL: "https://api.edamam.com",
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
    EdamamAccountUser: process.env.REACT_APP_EDAMAM_ACCOUNT_USER,
  },
});
