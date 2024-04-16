import {useQuery} from "@tanstack/react-query";
import {api} from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;


const fetchSimilarRecipe =(id) => {

    return api.get(`recipes/${id}/similar?apiKey=${API_KEY}`);
}

export const useSimilarRecipe = (id)=>{
    return useQuery({
        queryKey: ['recipe-similar', id],
        queryFn: fetchSimilarRecipe(id),
        select:(result)=>result.data,
        staleTime:60000000,
    });
}