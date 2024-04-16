import { useQuery } from "@tanstack/react-query";
import { api_edamam } from "../utils/api";

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

const fetchRecipesBySearch = async (keyword) => {
  try {
    const response = await api_edamam.get(
      `/search?q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
};

const extractRecipeId = (uri) => {
  const parts = uri.split("#recipe_");
  return parts.length === 2 ? parts[1] : null;
};

export const useSearchRecipesQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["search-recipes", keyword],
    queryFn: () => fetchRecipesBySearch(keyword),
    enabled: !!keyword,
    select: (data) =>
      data?.hits.map((hit) => {
        const recipe = hit.recipe;
        return {
          ...recipe,
          id: extractRecipeId(recipe.uri),
        };
      }),
    staleTime: 3000,
    keepPreviousData: true,
  });
};
