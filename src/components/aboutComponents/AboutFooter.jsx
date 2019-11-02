import React from "react"
import {Icon, Row, Col} from "react-materialize"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faFilePdf} from "@fortawesome/free-solid-svg-icons"

import agent_file from "../../assets/documents/SLAVAUD_Resume.pdf"

const AboutFooter = () =>
{
    return(
        <footer>
        <h4>{<Icon> cloud </Icon>} Where to find me ?</h4>
        <Row className="aboutIcons z-depth-1">
            <Col s={2} l={2} offset={"s1 l2"}>
                <a href="https://www.linkedin.com/in/stephane-lavaud-webdev/" target="_blank" rel="noopener noreferrer nofollow">
                    <FontAwesomeIcon className="blue-text text-darken-3" icon={faLinkedin}/>
                </a>
            </Col>
            <Col s={2} l={2} offset={"s2 l1"}>
            <a href="https://github.com/KleinosFR" target="_blank" rel="noopener noreferrer nofollow">
                <FontAwesomeIcon className="black-text" icon={faGithub}/>
                </a>
            </Col>
            <Col s={2} l={2} offset={"s2 l1"}>
            <a href="https://twitter.com/LavaudStephane" target="_blank" rel="noopener noreferrer nofollow">
                <FontAwesomeIcon className="blue-text lighten-1" icon={faTwitter}/>
                </a>
            </Col>
        </Row>
        <Row className="z-depth-1" padding={"5px"} >
            <p>Get my resume </p> 
            <a className={agent_file} href="src/assets/documents/SLAVAUD_Resume.pdf" download="SLAVAUD_Resume.pdf">
                <FontAwesomeIcon icon={faFilePdf} size={"3x"} />
                </a>
        </Row>



        </footer>

    )




}


export default AboutFooter