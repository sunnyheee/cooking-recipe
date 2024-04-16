import React from 'react';
import "./RecipeDetail.style.css"
import { useParams } from 'react-router-dom';
import { useRecipeInfo } from '../../hooks/useRecipeInfo';
import RecipeInfoBox from './component/RecipeInfoBox.jsx';

const RecipeDetail = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useRecipeInfo(id);

    if (isLoading) {
        return <div>Loading...</div>;  // 로딩 상태 표시
    }

    if (isError) {
        return <div>Error: {error.message}</div>;  // 에러 상태 표시
    }
    console.log(data);
    return (
        <>
            <RecipeInfoBox data={data} />
        </>
    );
}

export default RecipeDetail;
