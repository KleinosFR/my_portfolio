import React from "react";
import {Row, Col} from "react-materialize";

import aldmeri from "../../assets/img/interestsImg/Aldmeri_Dominion.png";

const AboutVideoGames = () => {

    return (

        <article className="left-align" >
            <Row>
                <Col s={12} l={1}>
                    
                        <img src={aldmeri} style={{width : "100%"}} alt="TESO Aldmeri Dominion"></img>

                </Col>
                <Col s={12} l={11}>
                    <p>I've been playing MMORPG since the first days of the internet, starting with the 4th Profecy.
                    <br/>
                    I've then spent some time on other games like Battletech Online, Ryzom, Star Wars, Neverwinter Nights until I started World of Warcraft Vanilla.
                    <br/>
                    I managed to finish all the Raids of WOW Vanilla, and its 2 further extentions as co-master of the guild.
                    <br/>
                    I finally ended on Elder Scrolls Online, due to his friendly and mature community, and his global server system permitting to meet players from all Europe. 
                    </p>
                </Col>
            </Row>

        </article>




    )


}

export default AboutVideoGames;