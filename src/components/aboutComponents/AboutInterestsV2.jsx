import React from "react";
import {Collapsible, CollapsibleItem, Icon} from "react-materialize"


import AboutPhoto from "./AboutPhoto"
import AboutVideoGames from "./AboutVideoGames"
import AboutDIY from "./AboutDIY"
import AboutDomotic from "./AboutDomotic"



const AboutInterestsV2 = () => {

    return (

        <article className="" >
            <h4 className="left-align">{<Icon> build </Icon>} My interests</h4>

            <Collapsible className="" >
                <CollapsibleItem className ="center-align" header="Photography" icon={<Icon> photo_camera </Icon>}>
                    <AboutPhoto />
                </CollapsibleItem >
                <CollapsibleItem className ="center-align" header="DIY and 3D printing" icon={<Icon> 3d_rotation </Icon>} >
                    <AboutDIY />
                </CollapsibleItem >
                <CollapsibleItem className ="center-align" header="Video Games" icon={<Icon> videogame_asset </Icon>}>
                    <AboutVideoGames />
                </CollapsibleItem >
                <CollapsibleItem className ="center-align" header="Home automation" icon={<Icon> home_work </Icon>}>
                    <AboutDomotic />
                </CollapsibleItem>
            </Collapsible>



        </article>





    )




}


export default AboutInterestsV2