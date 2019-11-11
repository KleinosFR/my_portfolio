import React from "react";
import {Row} from "react-materialize"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons"

import "./footer.css"


function Footer() {


    return(
    <footer className="blue lighten-4 valign-wrapper center-align">
        <Row className="footerText">
        Copyrigth Stéphane LAVAUD 2019 - React <FontAwesomeIcon color={"rgb(50,150,255)"} icon={faReact} size={"lg"} /> - Materialize CSS 
        </Row>
    </footer>
    )


}

export default Footer