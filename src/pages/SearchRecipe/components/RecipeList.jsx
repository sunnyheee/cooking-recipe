import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="card-imgarea">
        <img src={recipe.image} alt={recipe.label} />
      </div>
      <div className="card-txtarea">
        {/* <span className="meal">{recipe.mealType.join(", ")}</span> */}
        <h3>{recipe.label}</h3>
        <p className="source">{recipe.source}</p>
        <p>{Math.round(recipe.calories)} calories</p>
        <div className="card-txt">
          <span>{recipe.ingredientLines.join(", ")}</span>
        </div>
      </div>
    </li>
  );
};

export default RecipeList;
