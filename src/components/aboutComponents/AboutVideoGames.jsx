import React from "react";
import {Card, CardPanel, Row, Col} from "react-materialize"

const AboutVideoGames = () => {

    return (

        <article className="left-align" >
            <Row>
                <Col s={4}>
                    Card
                        <img className="responsive-image" src="http://via.placeholder.com/1920x1080" ></img>

                </Col>

                <Col s={8} >
                <p>I've been playing MMORPG since the first days of the internet, starting with the 4th Profecy.
                <br/>
                I've then spent some time on other games, like Battletech Online, Ryzom, Star Wars, Neverwinter Nights until I started World of Warcraft Vanilla.
                <br/>
                I managed to finish all the Raids of WOW Vanilla, and its 2 further extentions as co-manager of the guild.
                <br/>
                I finally ended on Elder Scrolls Online, due to his friendly and mature community, and his global server system permitting to meet players from all Europe. 
                </p>
                </Col>
            </Row>

        </article>




    )


}

export default AboutVideoGames;