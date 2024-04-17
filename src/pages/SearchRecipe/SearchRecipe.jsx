import "./SearchRecipe.style.css";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useSearchRecipesQuery } from "../../hooks/useSearchRecipe";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeSort from "./components/RecipeSort";

const SearchRecipe = () => {
  const [query] = useSearchParams();
  const keyword = query.get("q");
  const [sortBy, setSortBy] = useState("relevance");

  const {
    data: recipeList,
    isLoading,
    isError,
    error,
  } = useSearchRecipesQuery({
    keyword,
    sortBy,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  console.log(recipeList, "recipeList");
  return (
    <main className="main inner">
      <section className="sec search-recipe">
        <h1>
          Search Results for:
          <span>{keyword}</span>
        </h1>
        <article className="sort-box">
          <RecipeSort setSortBy={setSortBy} />
        </article>
        <article className="search-card-box">
          <ul className="search-card-ul">
            {recipeList &&
              recipeList.map((recipe, index) => (
                <RecipeList recipe={recipe} key={index} />
              ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default SearchRecipe;
