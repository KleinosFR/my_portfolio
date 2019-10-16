import React from "react"

import PortfolioArticle from "./PortfolioArticle"
import project1Img from "../assets/img/projectsImg/portfolioWCS.png"


const projectsList = [
    {
        name : "project1",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fuga!",
        image : project1Img,
        url : ""
    },
    {
        name : "project2",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fuga!",
        image : "",
        url : ""
    },{
        name : "project3",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fuga!",
        image : "",
        url : ""
    }

]



const Portfolio = () =>{
return(
    <section id="portfolio" className="portfolio card-panel teal lighten-5">

    {projectsList.map((project) => <PortfolioArticle {...project}/>)}
    
    <PortfolioArticle {...projectsList}/>

    </section>
)

}

export default Portfolio