import axios from "axios";

const REACT_APP_RECIPE_APP_ID = process.env.REACT_APP_RECIPE_APP_ID
const REACT_APP_RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY
const REACT_APP_NUTRITION_APP_ID = process.env.REACT_APP_NUTRITION_APP_ID
const REACT_APP_NUTRITION_API_KEY = process.env.REACT_APP_NUTRITION_API_KEY
const REACT_APP_FOOD_APP_ID = process.env.REACT_APP_FOOD_APP_ID
const REACT_APP_FOOD_API_KEY = process.env.REACT_APP_FOOD_API_KEY


export const api_edamam = axios.create({
  baseURL: "https://api.edamam.com",
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
    EdamamAccountUser: process.env.REACT_APP_EDAMAM_ACCOUNT_USER,
  },
});
