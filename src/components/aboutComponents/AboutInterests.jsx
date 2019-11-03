import React from "react";
import { Icon, Carousel } from "react-materialize"



import AboutPhoto from "./AboutPhoto"
import AboutVideoGames from "./AboutVideoGames"
import AboutDIY from "./AboutDIY"
import AboutDomotic from "./AboutDomotic"



const AboutInterests = () => {

    return (

        <article className="" >
            <h5>My interests</h5>
            <Carousel id="aboutCarousel"
            options={{ fullWidth: true, indicators: true, duration: 200 }} className="black-text center" >
                <div className="blue lighten-4">
                    <AboutPhoto />
                </div>

                <div className="red lighten-4">
                    <h5><Icon>videogame_asset</Icon> Video Games</h5>
                    <AboutVideoGames />
                </div>

                <div className="purple lighten-4">
                    <h5><Icon>3d_rotation</Icon> DIY and 3D printing</h5>
                    <AboutDIY />
                </div>

                <div className="green lighten-4">
                    <h5><Icon>home_work</Icon> Home automation</h5>

                    <AboutDomotic />
                </div>





            </Carousel>



        </article>





    )




}


export default AboutInterests