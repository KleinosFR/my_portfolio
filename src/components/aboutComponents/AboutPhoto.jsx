import React from "react";
import {Card, Icon, MediaBox} from "react-materialize"

import Gwoka from "../../assets/img/interestsImg/GwokaOnSunset.jpg"

const AboutPhoto = () => {

    return (

        <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nihil, iste nemo odio inventore eos dolor ullam, libero odit distinctio perferendis? Doloremque, suscipit necessitatibus asperiores error, et amet quo beatae consectetur id dolorum sapiente, inventore vel expedita architecto iure a repudiandae saepe non ex reprehenderit nulla optio numquam eaque. At!</p>
            <Card>
                <MediaBox>
                <img src={Gwoka} style={{width : "50%", height : "100%"}} alt="Gwoka on sunset - copyright Stéphane LAVAUD web dev"/>
                </MediaBox>
            </Card>
        </article>
        




    )


}

export default AboutPhoto;