import React from "react";
import Container from "react-bootstrap/Container";
import {Badge, Col, Button, Row, Stack,Alert} from "react-bootstrap";
import "./Mainpage.style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import useWindowDimensions from "../../hooks/useWindowDimensions";
import {FoodSlider} from "../../common/FoodSlider/FoodSlider";
import {useRandomFood} from "../../hooks/useRandomRecipe";
import {FoodCard} from "../../common/FoodCard/FoodCard";
import {useNavigate} from "react-router-dom";


const Mainpage = () => {
        AOS.init();

        const {width} = useWindowDimensions();
        console.log(width);
        const navigator = useNavigate();

        const onBtnGoFindRecipe = () => {
            navigator("/recipe")
        };

        const onBtnGoLookAround = () => {
            navigator("/recipe?q=Random%20Foods");
        };

        const getRandomString = () => {
            const stringDict = [
                'cake', 'pizza', 'hamburger', 'salad', 'steak', 'mushroom', 'cookie', 'bbq'
            ];
            //stringDict[Math.round(Math.random() * stringDict.length-1)];
            return stringDict[0];
        };
        const keyword = getRandomString();
        const keyword2 = 'salmon'

        const {data, isLoading, isError, error} = useRandomFood(keyword);
        const {data: section1, isLoading1, isError1, error1} = useRandomFood(keyword2);
        console.log(data);
        let section1_data_main, section1_data_left, section1_data_right;
        if (!isLoading1 && section1) {
            section1_data_main = section1[0];
            section1_data_left = section1.slice(1,3);
            section1_data_right = section1.slice(3,5);
        }

        if (isError) {
            return <Alert variant="danger">{error.message}</Alert>;
          }   if (isError1) {
            return <Alert variant="danger">{error1.message}</Alert>;
          }

        return (
            < Container className="mainPageContainer">
                < Row data-aos="fade-up" data-aos-duration="2000" data-aos-mirror="true"
                      className={"todaysfood"}>
                    {/*페이지 목적*/}
                    <Col className="mainFloating">
                        {width>1000 ? 
                            (<Row>
                                <Col sm={7}>
                                    <Stack gap={4} className="col-md-10 mx-auto">
                                        <div><Badge pill bg="warning">Nutrition · Favor · Health</Badge></div>
                                        <div></div>
                                        <span className="titleWord d-inline"><h1>Get Started With Today's Best Menu!</h1></span>
                                        <div><Button onClick={onBtnGoFindRecipe} className="btnGoFindRecipe" variant="warning">Find
                                            Recipe</Button> <Button
                                            onClick={onBtnGoLookAround}
                                            className="btnLookAround" variant="outline-dark">Look
                                            Around Foods</Button></div>
                                    </Stack>
                                </Col>
                                <Col sm={5}>
                                    <img className={"mainLogo"} src={"/images/recipe-main-floating.png"} alt="recipe-main-floating.png"/>
                                </Col>
                            </Row>)
                            :(<Row>
                                <Col sm={12}>
                                    <Stack gap={4} className="col-md-10 mx-auto">
                                        <div><Badge pill bg="warning">Nutrition · Favor · Health</Badge></div>
                                        <div></div>
                                        <span className="titleWord d-inline"><h1>Get Started With Today's Best Menu!</h1></span>
                                        <div><Button onClick={onBtnGoFindRecipe} className="btnGoFindRecipe" variant="warning">Find
                                            Recipe</Button> <Button
                                            onClick={onBtnGoLookAround}
                                            className="btnLookAround" variant="outline-dark">Look
                                            Around Foods</Button></div>
                                    </Stack>
                                </Col>
                            </Row>)
                        }
                    </Col>
                </Row>
                <Row data-aos="fade-up-right" data-aos-duration="2000" className={"todaysfood"}>
                    <Col style={{backgroundColor: "#FFFFFF", width: "100%",}}>
                        {/*<div><h1>Find Your Favorite Recipe</h1></div>*/}
                        <Row>
                            {isLoading ? <h1>Loading...</h1> :
                                <div><FoodSlider title={`Today's Random Recipes : ${keyword}`} data={data}/></div>}
                        </Row>
                    </Col>
                </Row>
                {!isLoading1 ? <Row data-aos="fade-up" data-aos-duration="2000" className="section1Background">
               <span style={{textAlign:"center"}} data-aos="slide-left" data-aos-duration="2000" className="titleWord d-inline"><h2>Make Something Delicious With {keyword2}!</h2></span>
                        <Col sm={12} fluid="md" className="section1">
                            {width>=1000 ? (<><div sm={3}>
                                <Stack gap={3}>
                                    {section1_data_left?.map((food)=><FoodCard style={{height: "100%"}} md={3} food={food?.food}/>)}
                                </Stack>
                            </div>
                            <div sm={6}><FoodCard style={{height: "100%"}} md={6} food={section1_data_main?.food}/></div>
                            <div sm={3}><Stack gap={3}>
                                {section1_data_right?.map((food)=><FoodCard style={{height: "100%"}} md={3} food={food?.food}/>)}
                            </Stack></div></>)
                            :(<>
                                {section1_data_left?.map((food)=><div><FoodCard style={{height: "100%"}} md={3} food={food?.food}/></div>)}
                                <div><FoodCard style={{height: "100%"}} md={6} food={section1_data_main?.food}/></div>
                                {section1_data_right?.map((food)=><div><FoodCard style={{height: "100%"}} md={3} food={food?.food}/></div>)}
                            </>)
                            }
                        </Col>
                    </Row>
                    : <></>
                }
            </Container>
        );
    }
;

export default Mainpage;
