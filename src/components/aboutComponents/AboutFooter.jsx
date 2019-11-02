import React from "react"
import {Icon, Row, Col} from "react-materialize"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"



const AboutFooter = () =>
{
    return(
        <footer>
        <h4>{<Icon> cloud </Icon>} Where to find me ?</h4>
        <Row className="aboutIcons">
            <Col>
                <FontAwesomeIcon icon={faLinkedin}/>
            </Col>
            <Col>
                <FontAwesomeIcon icon={faGithub}/>
            </Col>
            <Col>
                <FontAwesomeIcon icon={faTwitter}/>
            </Col>
        </Row>

        </footer>

    )




}


export default AboutFooter