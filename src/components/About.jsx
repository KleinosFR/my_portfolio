import React from "react";
import AboutIntro from "./aboutComponents/AboutIntro";
import AboutInterestsV2 from "./aboutComponents/AboutInterestsV2";
import {Row, Col } from "react-materialize";
import AboutFooter from "./aboutComponents/AboutFooter";

import "./aboutComponents/about.css"




const About = () => {

return(
    <section id="about" className="white black-text card-panel" >
        <header className="container col s12 center">
            <h3 className="col s12">About me</h3>
            <p className="col s12" style ={{fontSize: '20px'}} >Looking for an internship from 15/02/2020</p>
        </header>
        <Row>
            <Col s={12}>
                <AboutIntro />
            </Col>
            <Col s={12}>
                <AboutInterestsV2 />
            </Col>
            <Col s={12}>
                <AboutFooter />
            </Col>
        </Row>


    </section>
)
}

export default About