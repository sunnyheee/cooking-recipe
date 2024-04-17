import { useQuery } from "@tanstack/react-query";
import { api_edamam } from "../utils/api";

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

const fetchRecipesBySearch = async (
  keyword,
  from,
  to,
  sortBy = "relevance"
) => {
  try {
    const response = await api_edamam.get(
      `/search?q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&sort=${sortBy}&from=${from}&to=${to}`
    );
    console.log(response.data, "response.data");
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

export const useSearchRecipesQuery = ({
  keyword,
  sortBy = "label",
  currentPage = 0,
  pageSize = 10,
}) => {
  const from = currentPage * pageSize;
  const to = (currentPage + 1) * pageSize - 1;
  return useQuery({
    queryKey: ["search-recipes", keyword, sortBy, from, to],
    queryFn: () => fetchRecipesBySearch(keyword, from, to, sortBy),
    enabled: !!keyword && from !== undefined && to !== undefined,
    select: (reslut) => reslut.data,
    // select: (data) => {
    //   const recipes = data?.hits.map((hit) => {
    //     const recipe = hit.recipe;
    //     return {
    //       recipes: data.hits.map((hit) => ({
    //         ...hit.recipe,
    //         id: extractRecipeId(hit.recipe.uri),
    //         calories: recipe.calories,
    //         totalTime: recipe.totalTime,
    //       })),
    //       count: data.count,
    //     };
    //   });
    //   switch (sortBy) {
    //     case "label":
    //       return recipes.sort((a, b) => a.label.localeCompare(b.label));
    //     case "calories":
    //       return recipes.sort((a, b) => a.calories - b.calories);
    //     case "time":
    //       return recipes.sort((a, b) => a.totalTime - b.totalTime);
    //     default:
    //       return recipes;
    //   }
    // },
    staleTime: 3000,
    keepPreviousData: true,
  });
};
