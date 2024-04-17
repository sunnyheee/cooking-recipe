import React from 'react';
import { Card, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { useSearchRecipesQuery } from '../../../../hooks/useSearchRecipe';

const SimilarRecipeBox = ({ firstIngredient }) => {
  const { data: recipes, isLoading, isError, error } = useSearchRecipesQuery({ keyword: firstIngredient });

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  if (!recipes) return <div>Recipe not found.</div>;
  
  console.log("첫번째 재료" , recipes);
  
  const firstIngredientName = recipes[0] && recipes[0].ingredients && recipes[0].ingredients[0] ? recipes[0].ingredients[0].food : 'the selected ingredient';
  return (
    <Container>
      <Row>
        <Col className="p-5 mb-5">
          <h1>Similar Recipes Based on {firstIngredientName}</h1>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-5 detail-box">
          {recipes.map((recipe, index) => (
              <Col key={index} className="p-5">
                  <Card >
                      <Card.Img variant="top" src={recipe.image} alt={recipe.label} />
                      <Card.Body>
                          <Card.Title>{recipe.label}</Card.Title>                          
                          <Button variant="primary" href={recipe.url} target="_blank">View Recipe</Button>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
    </Container>    
  )
}

export default SimilarRecipeBox