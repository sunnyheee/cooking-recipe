import React from 'react';
import { Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useRecipeDetailQuery } from '../../hooks/useRecipeDetail.js'// 가정한 경로
import RecipeInfoBox from './component/RecipeInfoBox/RecipeInfoBox.jsx';
import SimilarRecipeBox from './component/SimilarRecipeBox/SimilarRecipeBox.jsx';
import GoToRecipeBox from './component/GoToRecipeBox/GoToRecipeBox.jsx';


const RecipeDetail = () => {
    const { id } = useParams();    
    const { data: recipe, isLoading, isError, error } = useRecipeDetailQuery(id);  

    if (isLoading) return <div>Loading...</div>;
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
      }
    if (!recipe) return <div>Recipe not found.</div>;

    

    const firstIngredient = recipe.ingredientLines[0];
    
    return (
        <div>            
            <RecipeInfoBox recipe={recipe}/>
            <GoToRecipeBox recipe={recipe}/>             
            <SimilarRecipeBox firstIngredient={firstIngredient}/>    
        </div>
    );
};

export default RecipeDetail;