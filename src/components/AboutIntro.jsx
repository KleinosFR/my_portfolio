import React from "react";
import {Collapsible, CollapsibleItem, Icon} from "react-materialize"




const AboutIntro = () =>{

    const wcsStyle = {
        color : "orange"
}

    return(

        <Collapsible popout>
            <CollapsibleItem className ="left-align" header="What I've done up to now..." icon={<Icon> receipt </Icon>}>
                <p>After spending more than 22 years in the shipping business, I felt it was time for a new start. I decided to change for another level : developing sofrware to simplify people's life. </p>
                <p>To make sure I get the skills needed to work as a developer, it was no better place then the <span> <a style={wcsStyle} href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="noopener noreferrer nofollow">Wild Code School</a></span>. 
                <p>I am now, more than ever, ready to go further into the development world, and motivated to keep improving myself.</p>
                </p>
            </CollapsibleItem>
        </Collapsible>
    )



}



export default AboutIntro
