import React from "react"
import { Row } from "react-materialize"

import PortfolioArticle from "./PortfolioArticle"
import imgPj1 from "../assets/img/projectsImg/portfolioWCS.png"
import imgPj2 from "../assets/img/projectsImg/gitWild.png"
import imgPj3 from "../assets/img/projectsImg/wildMonsters.jpg"

import soon from "../assets/img/coming-soon.jpg"



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
        description: "Visual manager for Github",
        languages: "JS/React, Rest API, Reactstrap",
        image: imgPj2,
        url: "https://gitwild.netlify.com/"
    },
    {
        id : 3,
        name: "Hackloween Monsters Battle",
        description: "Project developped during a 24hrs hackathon. Winner of the hackathon",
        languages: "JS/React, Rest API, PHP, Reactstrap",
        image: imgPj3,
        url: "https://wildmonstersbattle.herokuapp.com/"
    },
    {
        id : 4,
        name: "TRACER-O Company Website",
        description: "Creation of the website for the delivery company TRACER-O",
        languages: "JS/React, Google Maps API, Reactstrap",
        image: soon,
        url: "https://stephane-lavaud.dev"
    },
    {
        id : 5,
        name: "Resolab",
        description: "Creation of a social network designed for children. Project for the account of Antic Pays-Basque, AdoEnia, Centre Hospitalier de la Côte Basque and DDEC64",
        languages: "JS/React, Redux, PHP, NodeJs / Express, Material-UI, GraphQL API",
        image: soon,
        url: "https://stephane-lavaud.dev"
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