import {useQuery} from "@tanstack/react-query";
import {api} from "../utils/api";
const API_KEY = process.env.REACT_APP_API_KEY;


const fetchAnalizeRecipe =(id) => {

    return api.get(`recipes/${id}/similar?apiKey=${API_KEY}`);
}

export const useAnalizeRecipe = (id)=>{
    return useQuery({
        queryKey: ['recipe-analize', id],
        queryFn: fetchAnalizeRecipe(id),
        select:(result)=>result.data,
        staleTime:600000,
    });
}