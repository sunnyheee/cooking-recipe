import {useQuery} from "@tanstack/react-query";
import {api, api_edamam} from "../utils/api";
const REACT_APP_NUTRITION_APP_ID = process.env.REACT_APP_NUTRITION_APP_ID
const REACT_APP_NUTRITION_API_KEY = process.env.REACT_APP_NUTRITION_API_KEY


const fetchAnalyzeNutrition =(keyword) => {
    return api_edamam.get(`/api/nutrition-data?type=public&app_id=${REACT_APP_NUTRITION_APP_ID}&app_key=${REACT_APP_NUTRITION_API_KEY}&ingr=${keyword}`);
};

export const useNutritionAnalysisAPI = (keyword)=>{
    return useQuery({
        queryKey: ['nutrition-analysis',keyword ],
        queryFn: ()=>fetchAnalyzeNutrition(keyword),
        enabled: !!keyword,
        select:(result)=>result.data,
        staleTime: 3000000,
        keepPreviousData: true,
    });
}