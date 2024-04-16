// searchRecipe.jsx
import { useSearchParams } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import { useSearchRecipesQuery } from "../../hooks/useSearchRecipe";

const SearchRecipe = () => {
  const [query] = useSearchParams();
  const keyword = query.get("q");

  const {
    data: recipeList,
    isLoading,
    isError,
    error,
  } = useSearchRecipesQuery({
    keyword,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  console.log(recipeList, "recipeList");
  return (
    <div>
      <h1>Search Results for: {keyword}</h1>
      {recipeList &&
        recipeList.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.label}</h3>
            <p>{recipe.source}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchRecipe;
