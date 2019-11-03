import React from "react"


import PortfolioArticle from "./PortfolioArticle"
import imgPj1 from "../assets/img/projectsImg/portfolioWCS.png"
import imgPj2 from "../assets/img/projectsImg/gitWild.png"
import { Row } from "react-materialize"



const projectsList = [
    {
        id : 1,
        name: "Wild Portfolio",
        description: "Portfolio of the Sept. 2019 students from the Wild Code School Biarritz ",
        languages: "HTML, CSS, Vanilla JS",
        image: imgPj1,
        url: "https://kleinosfr.github.io/projet-portfolio/"
    },
    {
        id : 2,
        name: "GitWild",
        description: "Visual manager for Github - under progress",
        languages: "JS/React, Rest API, Reactstrap",
        image: imgPj2,
        url: ""
    },
    {
        id : 3,
        name: "Hackloween Monsters Battle",
        description: "Project developped during a 24hrs hackathon.",
        languages: "JS/React, Rest API, PHP, Reactstrap",
        image: "",
        url: "https://wildmonstersbattle.herokuapp.com/"
    }

]



const Portfolio = () => {
    return (

        <div id="portfolio" className="black-text row white">
            <h3>My past and current projects</h3>
            <Row>
                {projectsList.map((project) => <PortfolioArticle {...project} />)}
            </Row>

        </div>



    )

}

export default Portfolio