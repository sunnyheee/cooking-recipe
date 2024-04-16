import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;


export const api = axios.create({
    baseURL: 'https://api.edamam.com',
    headers: {
        Accept: 'application/json',
    },
    params: {
        app_key: API_KEY,
        app_id: API_ID
    }

});