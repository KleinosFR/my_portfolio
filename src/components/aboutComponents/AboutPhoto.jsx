import React from "react";
import {Card, Icon, MediaBox, CardTitle, Row} from "react-materialize"

import Gwoka from "../../assets/img/interestsImg/GwokaOnSunset.jpg"
import hamburg from "../../assets/img/interestsImg/tripToHamburg.jpg"

const AboutPhoto = () => {

    return (

    <div>
        <h5><Icon>photo_camera</Icon> Photography</h5>
        <p>Photography is part of my life since more than 10 years, and I try to capture every magic moment the life is offering us.</p>
        
                    <Row>
                        <MediaBox className="responsive-image col s12 l6 z-depth-3">
                        <img className="responsive-image" src={Gwoka}  alt="Gwoka under the sunset - copyright Stéphane LAVAUD web dev"/>
                        </MediaBox>
                        <MediaBox className="responsive-image col s12 l6">
                        <img className="responsive-image" src={hamburg}  alt="Trip to Hamburg - copyright Stéphane LAVAUD web dev"/>
                        </MediaBox>
                    </Row>
    </div>
        




    )


}

export default AboutPhoto;