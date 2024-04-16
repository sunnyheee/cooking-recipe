import React from "react";
import Container from "react-bootstrap/Container";
import {Badge, Col, Figure, FigureImage, Image, Button, Row, Alert, Stack} from "react-bootstrap";
import "./Mainpage.style.css"
import {useNutritionAnalysisAPI} from "../../hooks/useNutritionAnalysisAPI";
import {useSearchParams} from "react-router-dom";
import {useSearchRecipesQuery} from "../../hooks/useSearchRecipe";
import {FoodSlider} from "../../common/FoodSlider/FoodSlider";

const Mainpage = () => {
        const getRandomString = () => {
            const stringDict = "abcdfgh";
            const stringDict2 = "aeiou";
            let first = stringDict[Math.round(Math.random() * 6)];
            let second = stringDict2[Math.round(Math.random() * 4)];
            return first + second;
        };
        const keyword = getRandomString();

        const {
            data: recipeList,
            isLoading,
            isError,
            error,
        } = useSearchRecipesQuery({
            keyword,
        });
        let data = {recipeList};
        console.log(data);
        return (
            < Container>
                < Row className={"todaysfood"}>
                    {/*페이지 목적*/}
                    <Col style={{backgroundColor: "#FFFFFF", width: "100vw",}}>
                        {/*<div><h1>Find Your Favorite Recipe</h1></div>*/}
                        <div style={{
                            backgroundColor: "beige",
                            height: "40vh",
                            width: "100%",
                            alignItems: "center",
                            alignContent: "center",
                            margin: "40px 0px"
                        }}>
                            <Row>
                                <Col lg={8}>
                                    <Stack gap={4} className="col-md-5 mx-auto">
                                        <div><Badge pill bg="warning">Nutrition · Favor · Health</Badge></div>
                                        <div></div>
                                        <span className="titleWord d-inline"><h1>Get Started With Today's Best Menu!</h1></span>
                                        <div><Button variant="warning">Find Recipe</Button> <Button variant="outline-dark">Look
                                            Around Foods</Button></div>
                                    </Stack>
                                </Col>
                                <Col lg={4}>
                                    <img height={200} src={"/images/recipe-main-floating.png"}/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className={"todaysfood"}>
                    <Col style={{backgroundColor: "#FFFFFF",  width: "100vw",}}>
                        {/*<div><h1>Find Your Favorite Recipe</h1></div>*/}
                        <div  style={{
                            backgroundColor: "beige",
                            height: "100%",
                            width: "100%",
                            alignItems: "center",
                            alignContent: "center",
                            margin: "40px 0px"
                        }}>
                            <Row>
                                {isLoading?<h1>Loading...</h1>:<div><FoodSlider title={"Today's Random Recipes"} data={data?.recipeList} /></div>}
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        )
            ;
    }
;

export default Mainpage;
