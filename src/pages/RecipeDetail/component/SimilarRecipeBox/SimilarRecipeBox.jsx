import React from 'react';
import './SimilarRecipeBox.style.css'
import { Card, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { useSearchRecipesQuery } from '../../../../hooks/useSearchRecipe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SimilarRecipeBox = ({ firstIngredient }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({
        duration: 1500 // 애니메이션 지속 시간 (밀리초)
    });
  }, []); // 초기 렌더링 시 한 번만 호출

  const { data: recipes, isLoading, isError, error } = useSearchRecipesQuery({ keyword: firstIngredient });  

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  if (!recipes) return <div>Recipe not found.</div>;
  
  console.log("첫번째 재료" , recipes);  
  
  const firstIngredientName = recipes[0] && recipes[0].ingredients && recipes[0].ingredients[0] ? recipes[0].ingredients[0].food : 'the selected ingredient';
  return (
    <Container className="pb-5">
      <Row > 
        <Col className="p-5 mb-5">
          <h1 className="recipe-box-title">Similar Recipes Based on {firstIngredientName}</h1>
        </Col>
      </Row>
      <Row xs={2} md={3} lg={4} className="detail-box2 p-5" data-aos="fade-left">
          {recipes.map((recipe, index) => (
              <Col key={index} className="p-5">
                  <Card className="similar-card" onClick={() => navigate(`/recipe/${recipe.id}`)}>
                      <Card.Img variant="top" src={recipe.image} alt={recipe.label}/>
                      <Card.Body>
                          <Card.Title className="similar-card-title">{recipe.label}</Card.Title>                          
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