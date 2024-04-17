import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const GoToRecipeBox = ({recipe}) => {
 
  return (
    <Container>
            <div>
                <Button variant="primary" size="lg" href={recipe.url}>
                    View recipe
                </Button>            
            </div>
            <div>좋아요</div>    
             
    </Container>
  )
}

export default GoToRecipeBox