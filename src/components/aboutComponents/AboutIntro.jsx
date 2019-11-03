import React from "react";
import {Collapsible, CollapsibleItem, Icon, Col} from "react-materialize"
import Row from "react-materialize/lib/Row";




const AboutIntro = () =>{

    const wcsStyle = {
        color : "orange"
}

    return(

        <article className="">
            <h4 className="left-align">{<Icon> receipt </Icon>} What I've done up to now...</h4>
                <Col  s={12} className="left-align z-depth-1 aboutIntro">
                    <p>After spending more than 22 years in the shipping business, I felt it was time for a new start. I decided to change for another level : developing sofware to simplify people's life.
                    <br />To make sure I get the skills needed to work as a developer, it was no better place then the <span> <a style={wcsStyle} href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="noopener noreferrer nofollow">Wild Code School</a></span>. 
                    <br />I am now, more than ever, ready to go further into the development world, and motivated to keep improving myself.</p>                    
                </Col>
        </article>
    )



}



export default AboutIntro
