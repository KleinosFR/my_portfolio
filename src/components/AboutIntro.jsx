import React from "react";
import {Collapsible, CollapsibleItem, Icon} from "react-materialize"




const AboutIntro = () =>{

    const wcsStyle = {
        color : "orange"
}

    return(

        <Collapsible popout>
            <CollapsibleItem className ="left-align" header="What I've done up to now..." icon={<Icon> receipt </Icon>}>
                <p>After spending more than 22 years in the shipping business, I decided to start a new career in what have always interested me : developping software to help people's life.</p>
                <p>
                I have so integrated the <span> <a style={wcsStyle} href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="noopener noreferrer nofollow">Wild Code School</a></span> to learn the skills I needed to start my new career. With my new knowledge, I am now ready to go further into the development world, and continue to learn everyday.
                </p>
            </CollapsibleItem>
        </Collapsible>
    )



}



export default AboutIntro
