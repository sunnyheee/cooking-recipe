import { useQuery } from '@tanstack/react-query';
import { api_edamam } from '../utils/api';

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;  

const fetchRecipeDetail = async (id) => {  
  try {
    const response = await api_edamam.get(`/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe detail:", error);
    throw new Error('Failed to fetch recipe details');
  }
};

export const useRecipeDetailQuery = (id) => {
  return useQuery({
    queryKey: ['recipe-detail', id],
    queryFn: () => fetchRecipeDetail(id),
    enabled: !!id,
    select: (result)=> result.recipe,
    staleTime: 300000,
  });
};