import React from "react";
import {MediaBox, Row, Col } from "react-materialize";

import hamburg from "../../assets/img/interestsImg/tripToHamburg2.jpg";
import bird from "../../assets/img/interestsImg/coloredBird2.jpg";

const AboutPhoto = () => {

    return (
        <article className="white-text">
            <p>Photography is part of my life since more than 10 years, and I try to capture every magic moment the life is offering us.</p>
            <Row >
                <Col s={12} l={6}>
                <MediaBox>
                    <img className ="responsive-image" style={{maxWidth:"100%"}} src={bird} alt="Colored bird in West Indies - copyright Stéphane LAVAUD web dev" />
                </MediaBox>
                </Col>
                <Col s={12} l={6}>
                <MediaBox>
                    <img className="responsive-image" style={{maxWidth:"100%"}} src={hamburg} alt="Trip to Hamburg - copyright Stéphane LAVAUD web dev" />
                </MediaBox>
                </Col>
            </Row>
        </article>





    )


}

export default AboutPhoto;