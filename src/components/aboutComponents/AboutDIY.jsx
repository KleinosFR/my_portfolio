import React from "react";
import {Row, Col} from "react-materialize";

import smars from "../../assets/img/interestsImg/smars2.jpg";

const AboutDIY = () => {

    return (

        <article>
        
            <Row className="left-align" >
                <Col l={2}>
                    <img src={smars} alt="SMARS DIY robot" style={{width:"100%"}}/>
                </Col>
                <Col l={10} s={12}>
                    <p>Since I was a teenager, I've always love to built things, and above all understand how they are working. I was buying every week some magazines about electronics, and performing the tutorials I was encountering.
                    <br/>
                    Years passed and technology improved, offering new possibilities with new devices like Arduino, RaspberryPi, etc...
                    <br/>
                    The acquisition of a 3D printer enabled me to go further, and build new devices to simplify my family's and friends life.
                    </p>
                    <ul className="aboutItems" style={{fontStyle:"italic"}}>
                        <p>Some of my creations :</p>
                        <li key="diy1">SMARS robot powered by an Arduino Uno</li>
                        <li key="diy2">Web controlled valve to water my garden powered by a NodeMcu</li>
                        <li key="diy3">Temperature, pressure, humidity sensors powered by a NodeMcu</li>
                        <li key="diy4">A fork handler for my nephew who broked his both arms</li>
                        <li key="diy5">Decoration and items for the events : Christmas, Easter, parties of the local Caribbean association...</li>
                    </ul>
                    
                    <p>My current DIY projects is a 
                        <a  href="https://magicmirror.builders/" 
                            target="_blank" rel="noopener noreferrer nofollow" 
                            style={{color : "black",
                                    fontWeight :"bold"}}
                            className="tooltipped"
                            data-position="top"
                            data-tooltip="Magic Mirror Builders Website"
                                    > Magic Mirror </a>
                    powered by a RaspberryPi3+, and based on the Node.js open source project.
                    <br/>Once the mirror will be built, it will enable me to developp Javascript add-ons and improve my coding skills.
                    </p>
                </Col>
            </Row>
        </article>




    )


}

export default AboutDIY;