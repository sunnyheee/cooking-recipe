import React, { useState } from 'react';
import "./GoToRecipeBox.style.css";
import { Container } from 'react-bootstrap';

const GoToRecipeBox = ({recipe}) => { 
  const [heartLiked, setHeartLiked] = useState(false);
 
  return (
    <Container className='pt-5 recipe-box'>
      <div className="d-flex justify-content-center go-to-recipe-box">
        <div className="p-5">
            <button className="recipe-btn">
                <a  href={recipe.url}>View recipe</a>
            </button>            
        </div>
        <div className="p-5 d-flex like pointer"> 
          <div>Like</div>                    
          <div onClick={() => setHeartLiked(!heartLiked)} className="pointer">  
            {heartLiked ? '❤️' : '🤍'}  
          </div>
          
        </div>    
      </div>
             
    </Container>
  )
}

export default GoToRecipeBox