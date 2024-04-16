import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeInfoBox  from './component/RecipeInfoBox/RecipeInfoBox.jsx';

const RecipeDetail = () => {
    
    return (
        <div>
            <RecipeInfoBox/>
        </div>
    );
};

export default RecipeDetail;