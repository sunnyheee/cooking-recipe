import React from "react";
import Container from "react-bootstrap/Container";
import {Badge, Col, Button, Row, Stack} from "react-bootstrap";
import "./Mainpage.style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import {FoodSlider} from "../../common/FoodSlider/FoodSlider";
import {useRandomFood} from "../../hooks/useRandomRecipe";

const Mainpage = () => {
        AOS.init();
        const getRandomString = () => {
            const stringDict = [
                'cake', 'pizza', 'hamburger', 'salad', 'steak', 'mushroom', 'cookie', 'bbq'
            ];
            //stringDict[Math.round(Math.random() * stringDict.length-1)];
            return stringDict[0];
        };
        const keyword = getRandomString();

        const {data, isLoading, isError, error} = useRandomFood(keyword);

        // let data = {recipeList};
        console.log(keyword);
        console.log(data);
        return (
            < Container className="mainPageContainer">
                < Row data-aos="fade-up" data-aos-duration="2000" data-aos-mirror="true"
                      className={"todaysfood"}>
                    {/*페이지 목적*/}
                    <Col className="mainFloating">
                        <Row>
                            <Col lg={7}>
                                <Stack gap={4} className="col-md-10 mx-auto">
                                    <div><Badge pill bg="warning">Nutrition · Favor · Health</Badge></div>
                                    <div></div>
                                    <span className="titleWord d-inline"><h1>Get Started With Today's Best Menu!</h1></span>
                                    <div><Button className="btnGoFindRecipe" variant="warning">Find Recipe</Button> <Button
                                        className="btnLookAround" variant="outline-dark">Look
                                        Around Foods</Button></div>
                                </Stack>
                            </Col>
                            <Col lg={5}>
                                <img className={"mainLogo"} src={"/images/recipe-main-floating.png"}/>
                            </Col>
                        </Row>
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
                <Row  data-aos="fade-up" data-aos-duration="2000" >

                </Row>
            </Container>
        )
            ;
    }
;

export default Mainpage;
