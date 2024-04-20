import React from 'react';
import './RecipeInfoBox.style.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RecipeInfoBox = ({ recipe }) => {   
    
    useEffect(() => {
        AOS.init({
            duration: 2000 // 애니메이션 지속 시간 (밀리초)
        });
    }, []); // 초기 렌더링 시 한 번만 호출

    if (!recipe) return <p>No recipe data available.</p>;
    console.log(recipe); 

    return (
        <Container>
            <Row >
                <Col><h1 className="p-5 recipe-box-title">Recipe</h1></Col>
            </Row>
            <Row className="detail-box1 p-5" data-aos="fade-left">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <img src={recipe.image} alt={recipe.label} className="img-fluid detail-box-img"/>
                </Col>
                <Col md={6}>
                    <h1 className="pb-3 pt-3"><strong>{recipe.label}</strong></h1>
                    <p> <strong>cuisineType: </strong>{recipe.cuisineType[0]}</p>
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
           
        </Container>
    );
}

export default RecipeInfoBox;