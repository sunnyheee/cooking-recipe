import "./SearchRecipe.style.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useSearchRecipesQuery } from "../../hooks/useSearchRecipe";

const SearchRecipe = () => {
  const navigate = useNavigate();
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
    <main className="main inner">
      <section className="sec search-recipe">
        <article className="sort-box">sort box</article>
        <article className="search-card-box">
          <h1>
            Search Results for:
            <span>{keyword}</span>
          </h1>
          <ul className="search-card-ul">
            {recipeList &&
              recipeList.map((recipe, index) => (
                <li
                  key={index}
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                  <div className="card-imgarea">
                    <img src={recipe.image} alt={recipe.label} />
                    <div className="card-imgtxt">
                      <span>{recipe.ingredientLines.join(", ")}</span>
                    </div>
                  </div>
                  <div className="card-txtarea">
                    <span className="meal">{recipe.mealType}</span>
                    <h3>{recipe.label}</h3>
                    <p>{recipe.source}</p>
                  </div>
                </li>
              ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default SearchRecipe;