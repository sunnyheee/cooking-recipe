import {useQuery} from "@tanstack/react-query";
import {api} from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;


const fetchRandomRecipe =() => {

    return api.get(`recipes/random?apiKey=${API_KEY}`);
}

export const useRandomRecipe = ()=>{
    return useQuery({
        queryKey: ['recipe-random'],
        queryFn: fetchRandomRecipe,
        select:(result)=>result.data,
        staleTime:600000,
    });
}