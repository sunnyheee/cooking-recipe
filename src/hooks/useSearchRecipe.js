import { useInfiniteQuery } from "@tanstack/react-query";
import { api_edamam } from "../utils/api";

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

const fetchRecipesBySearch = async (
  keyword,
  sortBy = "relevance",
  pageParam = 0
) => {
  const perPage = 9;
  const from = pageParam * perPage;
  const to = from + perPage;
  const response = await api_edamam.get(
    `/search?q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&sort=${sortBy}&from=${from}&to=${to}`
  );
  return {
    data: response.data.hits,
    nextPage: pageParam + 1,
    total: response.data.count,
  };
};

const extractRecipeId = (uri) => {
  const parts = uri.split("#recipe_");
  return parts.length === 2 ? parts[1] : null;
};

export const useSearchRecipesQuery = ({ keyword, sortBy = "label" }) => {
  return useInfiniteQuery({
    queryKey: ["search-recipes", keyword, sortBy],
    queryFn: ({ pageParam }) =>
      fetchRecipesBySearch(keyword, sortBy, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.flatMap((page) => page.data).length < lastPage.total) {
        return lastPage.nextPage;
      }
      return undefined;
    },
    select: (data) => {
      const recipes = data.pages.flatMap((page) =>
        page.data.map((hit) => ({
          ...hit.recipe,
          id: extractRecipeId(hit.recipe.uri),
          calories: hit.recipe.calories,
          totalTime: hit.recipe.totalTime,
        }))
      );

      switch (sortBy) {
        case "label":
          return recipes.sort((a, b) => a.label.localeCompare(b.label));
        case "calories":
          return recipes.sort((a, b) => a.calories - b.calories);
        case "time":
          return recipes.sort((a, b) => a.totalTime - b.totalTime);
        default:
          return recipes;
      }
    },
  });
};
