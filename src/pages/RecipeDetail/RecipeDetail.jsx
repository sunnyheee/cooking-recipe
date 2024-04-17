import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeDetailQuery } from '../../hooks/useRecipeDetail.js'// 가정한 경로
import RecipeInfoBox from './component/RecipeInfoBox/RecipeInfoBox.jsx';

const RecipeDetail = () => {
    const { id } = useParams();    
    const { data: recipe, isLoading, error } = useRecipeDetailQuery(id);  

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading the recipe.</div>;
    if (!recipe) return <div>Recipe not found.</div>;
    
    return (
        <div>
            <RecipeInfoBox recipe={recipe}/>            
        </div>
    );
};

export default RecipeDetail;