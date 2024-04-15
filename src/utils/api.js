import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;


export const api = axios.create({
    baseURL: 'https://api.spoonacular.com',
    headers: {
        Accept: 'application/json',

    },

});