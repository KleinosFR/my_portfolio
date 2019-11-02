import React from "react";
import { Icon, MediaBox, Row, Col } from "react-materialize"

import Gwoka from "../../assets/img/interestsImg/GwokaOnSunset.jpg"
import hamburg from "../../assets/img/interestsImg/tripToHamburg.jpg"

const AboutPhoto = () => {

    return (
        <>
            <p>Photography is part of my life since more than 10 years, and I try to capture every magic moment the life is offering us.</p>
            <Row >
                <Col s={12} l={6}>
                <MediaBox>
                    <img className ="responsive-image" style={{maxWidth:"100%"}} src={Gwoka} alt="Gwoka under the sunset - copyright Stéphane LAVAUD web dev" />
                </MediaBox>
                </Col>
                <Col s={12} l={6}>
                <MediaBox>
                    <img className="responsive-image" style={{maxWidth:"100%"}} src={hamburg} alt="Trip to Hamburg - copyright Stéphane LAVAUD web dev" />
                </MediaBox>
                </Col>
            </Row>
        </>





    )


}

export default AboutPhoto;