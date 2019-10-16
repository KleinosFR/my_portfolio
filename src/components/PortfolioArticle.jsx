import React from "react";

import "./portfolioArticle.css"



const PortfolioArticle = ({name, description, image, url}) =>{

    return(
        <article className="portfolioArticle">
            <a href={url} className="portfolioArticleLink" id="portfolio">  <img src={image} alt={name}/> </a>
            <p>{description}</p>
        </article>


    )


}

export default PortfolioArticle