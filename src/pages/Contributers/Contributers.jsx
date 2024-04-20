import {Col, Row} from "react-bootstrap";
import React from "react";
import "./Contributers.style.css"
import Container from "react-bootstrap/Container";

export const Contributers = () => {
    return (
        <Container className="contributer-container">
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col sm={7} className="Mention">

                </Col>
                <Col sm={5}>
                    <img className={"specialist"} src={"/images/contributer/LJS.png"} alt="LJS"/>
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col sm={5}>
                    <img className={"specialist"} src={"/images/contributer/KSH.png"} alt="KSH"/>
                </Col>
                <Col sm={7} className="Mention">

                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col sm={7} className="Mention">

                </Col>
                <Col sm={5}>
                    <img className={"specialist"} src={"/images/contributer/LHJ.png"} alt="LHJ"/>
                </Col>
            </Row>
        </Container>

    )
}