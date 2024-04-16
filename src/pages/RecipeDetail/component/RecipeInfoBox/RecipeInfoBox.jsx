import React from 'react';
import './RecipeInfoBox.style.css'


const RecipeInfoBox = () => { 

    return (
        <section className="recipe-datail-info">            
            <article className="recipe-detail-box">
                <div> 이미지</div>
                <h4>요리이름</h4>
                <div className="recipe-detail-info-info1">
                    <div>
                       조리시간
                    </div>
                    <div>
                        건강점수
                    </div>
                    <div>
                        평가점수
                    </div>                    
                </div>
            </article>
            
            <article className="recipe-detail-box" >
                <h4>Ingredients</h4>
                <div className="recipe-detail-ingredient">
                
                </div>
            </article>
        
           
        </section>
    );
}

export default RecipeInfoBox;