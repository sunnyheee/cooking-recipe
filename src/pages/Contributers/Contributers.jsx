import {Col, Row} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Contributers.style.css"
import Container from "react-bootstrap/Container";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contributers = () => {
    AOS.init();
    const completedTitle1 = "We created a system to help you get a feel for how great React is.";
    const completedTitle2 = "Take a look around and feel the excellence of React.";
    const completedTitle3 = "We give you a completely new UX with React.";
    const completedTitle4 = "Feel the Difference With Actual Product.";
    const completedTitle5 = "Building something with React can be the shortest path to becoming a good developer.";
    const completedTitle6 = "Learn React's paradigm and apply it your own project.";
    const [landingTitle1, setLandingTitle1] = useState("");
    const [landingTitle2, setLandingTitle2] = useState("");
    const [landingTitle3, setLandingTitle3] = useState("");
    const [landingTitle4, setLandingTitle4] = useState("");
    const [landingTitle5, setLandingTitle5] = useState("");
    const [landingTitle6, setLandingTitle6] = useState("");
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);


    useEffect(()=>{
        const interval = setInterval(()=>{
            setLandingTitle1(landingTitle1+completedTitle1[count1]);
            setCount1(count1+1);
        },100);
        if(count1 === completedTitle1.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });
    useEffect(()=>{
        const interval = setInterval(()=>{
            setLandingTitle2(landingTitle2+completedTitle2[count2]);
            setCount2(count2+1);
        },100);
        if(count2 === completedTitle2.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });
    useEffect(()=>{
        const interval = setInterval(()=>{
            setLandingTitle3(landingTitle3+completedTitle3[count3]);
            setCount3(count3+1);
        },100);
        if(count3 === completedTitle3.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });
    useEffect(()=>{
        const interval = setInterval(()=>{
            setLandingTitle4(landingTitle4+completedTitle4[count4]);
            setCount4(count4+1);
        },100);
        if(count4 === completedTitle4.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });
    useEffect(()=>{
        const interval = setInterval(()=>{
            setLandingTitle5(landingTitle5+completedTitle5[count5]);
            setCount5(count5+1);
        },100);
        if(count5 === completedTitle5.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });
    useEffect(()=>{
        const interval = setInterval(()=>{
            setLandingTitle6(landingTitle6+completedTitle6[count6]);
            setCount6(count6+1);
        },100);
        if(count6 === completedTitle6.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    return (
        <Container className="contributer-container">
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col sm={7} className="Mention">
                    <h1 className="TeammateName" style={{textAlign:'right'}}>이정승. Product Owner.</h1>
                    <div style={{textAlign:'right'}}>{landingTitle1}</div>
                    <div style={{textAlign:'right'}}>{landingTitle2}</div>
                </Col>
                <Col className="ImageCol" sm={5}>
                    <img className={"specialist"} src={"/images/contributer/LJS.png"} alt="LJS.png" style={{borderLeft:"2px solid lightgray", paddingLeft:"30px"}}/>
                    
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col className="ImageCol" sm={5}>
                    <img className={"specialist"}  src={"/images/contributer/KSH.png"} alt="KSH.png" style={{borderRight:"2px solid lightgray", paddingRight:"30px"}}/>
                </Col>
                <Col sm={7} className="Mention">
                    <h1 className="TeammateName" style={{textAlign:'left'}}>박선희. Scrum Master.</h1>
                    <div style={{textAlign:'left'}}>{landingTitle3}</div>
                    <div style={{textAlign:'left'}}>{landingTitle4}</div>
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="2000" className="contributer-section">
                <Col sm={7} className="Mention">
                    <h1 className="TeammateName" style={{textAlign:'right'}}>이호재. CTO.</h1>
                    <div style={{textAlign:'right'}}>{landingTitle5}</div>
                    <div style={{textAlign:'right'}}>{landingTitle6}</div>
                </Col>
                <Col className="ImageCol" sm={5}  style={{borderLeft:"2px solid lightgray"}} >
                    <img className={"specialist"} src={"/images/contributer/LHJ.png"} alt="LHJ.png" />
                </Col>
            </Row>
        </Container>

    )
}