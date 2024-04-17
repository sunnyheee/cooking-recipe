import {useQuery} from "@tanstack/react-query";
import {api_edamam} from "../utils/api";


const REACT_APP_FOOD_APP_ID = process.env.REACT_APP_FOOD_APP_ID
const REACT_APP_FOOD_API_KEY = process.env.REACT_APP_FOOD_API_KEY



const fetchRandomFood =(food) => {

    return api_edamam.get(`api/food-database/v2/parser?ingr=${food}&app_key=${REACT_APP_FOOD_API_KEY}&app_id=${REACT_APP_FOOD_APP_ID}&nutrition-type=cooking`);
}


const extractOnlyHasImage = (dataArray)=>{
    return dataArray.filter((data)=> !!data.food.image)
};


export const useRandomFood = (food)=>{
    return useQuery({
        queryKey: ['food-random', food],
        queryFn: ()=>fetchRandomFood(food),
        select:(result)=>extractOnlyHasImage(result.data.hints),
        staleTime:60000000,
    });
}