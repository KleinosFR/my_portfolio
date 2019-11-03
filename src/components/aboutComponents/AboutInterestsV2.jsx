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
                <CollapsibleItem className ="center-align grey darken-4" header="Photography" icon={<Icon> photo_camera </Icon>}>
                    <AboutPhoto className="" />
                </CollapsibleItem >
                <CollapsibleItem className ="center-align blue lighten-4" header="DIY and 3D printing" icon={<Icon> 3d_rotation </Icon>} >
                    <AboutDIY />
                </CollapsibleItem >
                <CollapsibleItem className ="center-align yellow lighten-4" header="Video Games" icon={<Icon> videogame_asset </Icon>}>
                    <AboutVideoGames />
                </CollapsibleItem >
                <CollapsibleItem className ="center-align green lighten-4" header="Home automation" icon={<Icon> home_work </Icon>}>
                    <AboutDomotic />
                </CollapsibleItem>
            </Collapsible>



        </article>





    )




}


export default AboutInterestsV2