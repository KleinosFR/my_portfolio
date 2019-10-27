import React from "react";
import AboutIntro from "./aboutComponents/AboutIntro";
import AboutInterests from "./aboutComponents/AboutInterests";





const About = () => {

return(
    <section id="about" className="white black-text card-panel" >
        <header className="container col s12 center">
            <h3 className="col s12">About me</h3>
            <p className="col s12" style ={{fontSize: '20px'}} >Looking for an internship from 15/02/2020</p>
        </header>
        <AboutIntro className="col s12" />
        <AboutInterests />



    </section>
)
}

export default About