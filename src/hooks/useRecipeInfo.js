import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchRecipeInfo = (id) => {
    return api.get(`/search`, {
        params: {
            ...api.defaults.params, // 기존 params 유지
            r: `http://www.edamam.com/ontologies/edamam.owl#recipe_${id}`
        }
    });
}

export const useRecipeInfo = (id) => {  
    return useQuery({
        queryKey: ['recipe-Info', id],
        queryFn: () => fetchRecipeInfo(id),
        select: (result) => result.data,
        staleTime: 600000,
    });
}