import {Col, Row} from "react-bootstrap";
import React from "react";
import "./Contributers.style.css"
import Container from "react-bootstrap/Container";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contributers = () => {
    AOS.init();
    return (
        <Container className="contributer-container">
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col sm={7} className="Mention">
                    <h2 className="TeammateName">이정승. Product Owner.</h2>
                    <div>"We created a system to help you get a feel for how great React is."</div>
                    <div>"Take a look around and feel the excellence of React."</div>
                </Col>
                <Col className="ImageCol" sm={5}>
                    <img className={"specialist"} src={"/images/contributer/LJS.png"} alt="LJS.png"/>
                    
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col className="ImageCol" sm={5}>
                    <img className={"specialist"} src={"/images/contributer/KSH.png"} alt="KSH.png"/>
                </Col>
                <Col sm={7} className="Mention">
                    <h2 className="TeammateName">박선희. Scrum Master.</h2>
                    <div>"We give you a completely new UX with React."</div>
                    <div>"Feel the Difference With Actual Product."</div>
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col sm={7} className="Mention">
                    <h2 className="TeammateName">이호재. CTO.</h2>
                    <div>"Building something with React can be the shortest path to becoming a good developer."</div>
                    <div>"Learn React's paradigm and apply it your own project."</div>
                </Col>
                <Col className="ImageCol" sm={5} >
                    <img className={"specialist"} src={"/images/contributer/LHJ.png"} alt="LHJ.png"/>
                </Col>
            </Row>
        </Container>

    )
}