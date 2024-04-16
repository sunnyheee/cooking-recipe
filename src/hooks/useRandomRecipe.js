import {useQuery} from "@tanstack/react-query";
import {api} from "../utils/api";

const REACT_APP_FOOD_APP_ID = process.env.REACT_APP_FOOD_APP_ID
const REACT_APP_FOOD_API_KEY = process.env.REACT_APP_FOOD_API_KEY



const fetchRandomFood =() => {

    return api.get(`/auto-complete?apiKey=${REACT_APP_FOOD_API_KEY}&app_id=${REACT_APP_FOOD_APP_ID}`);
}

export const useRandomRecipe = ()=>{
    return useQuery({
        queryKey: ['recipe-random'],
        queryFn: fetchRandomFood,
        select:(result)=>result.data,
        staleTime:60000000,
    });
}