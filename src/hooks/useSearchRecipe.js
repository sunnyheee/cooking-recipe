import { useQuery } from "@tanstack/react-query";
import { api_edamam } from "../utils/api";

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

const fetchRecipesBySearch = async (keyword) => {
  try {
    const response = await api_edamam.get(
      `/search?q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
};

export const useSearchRecipesQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["search-recipes", keyword],
    queryFn: () => fetchRecipesBySearch(keyword),
    enabled: !!keyword,
    select: (data) => data?.hits.map((hit) => hit.recipe),
    staleTime: 300000,
    keepPreviousData: true,
  });
};
