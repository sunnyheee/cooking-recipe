import React from 'react';
import './RecipeInfoBox.style.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';


const RecipeInfoBox = ({ recipe }) => {
   

    if (!recipe) return <p>No recipe data available.</p>;
    console.log(recipe);

    const goToRecipePage = () => {
        window.location.href = recipe.url;
    }

    return (
        <Container>
            <Row className="mt-5 detail-box p-5 ">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <img src={recipe.image} alt={recipe.label} className="img-fluid"/>
                </Col>
                <Col md={6}>
                    <h1 className="pb-3 pt-3"><strong>{recipe.label}</strong></h1>
                    <p><strong>Source:</strong> {recipe.source}</p>
                    <p><strong>Total Time:</strong> {recipe.totalTime} minutes</p>
                    <p><strong>Servings:</strong> {recipe.yield}</p>
                    <h3 className="pt-1">Nutritional Information:</h3>
                    <ListGroup className="pt-3 pb-3">
                        <ListGroup.Item><strong>Calories:</strong> {Math.round(recipe.calories)}</ListGroup.Item>
                        <ListGroup.Item><strong>Total Weight:</strong> {recipe.totalWeight.toFixed(1)} grams</ListGroup.Item>
                        <ListGroup.Item><strong>Diet Labels:</strong> {recipe.dietLabels.join(', ')}</ListGroup.Item>
                        <ListGroup.Item><strong>Health Labels:</strong> {recipe.healthLabels.join(', ')}</ListGroup.Item>
                    </ListGroup>
                    <h3>Ingredients:</h3>
                    <ListGroup className='pt-3 pb-3'>
                        {recipe.ingredientLines.map((ingredient, index) => (
                            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>                                               
            </Row>
            <Row>
                <Col>
                    <div className="pt-5 pb-5 d-flex justify-content-center">
                        <Button variant="primary" size="lg" onClick={goToRecipePage}>
                            View recipe
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default RecipeInfoBox;