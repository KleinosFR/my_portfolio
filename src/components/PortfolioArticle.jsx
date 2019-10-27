import React from "react";
import { Card, Col, Row } from "react-materialize"

import "./portfolioArticle.css"



const PortfolioArticle = ({ name, description, languages, image, url }) => {

    return (

        <React.Fragment>
            <Col l={6} xl={6}>
                <Card horizontal className="lighten-4">
                    <h5>{name}</h5>
                    <a href={url} target="_blank" rel="noreferrer noopener nofollow" className="col s12 xl8" id="">
                        <img className="responsive-img z-depth-3" src={image} alt={name} />
                    </a>
                    <div className="textArticleWrapper col s12 xl4">
                        <p className="descriptionText"><strong>{description}</strong></p>
                        <p className="languagesText">Programming languages : {languages}</p>
                        <a href={url} target="_blank" rel="noreferrer noopener nofollow" className="hoverable btn blue lighten-4 blue-text waves-effects waves-blue" id=""> See more </a>
                    </div>
                </Card>
            </Col>
            <div className="col s12 xl0 divider white hide-on-large-only"></div>
        </React.Fragment>



    )


}

export default PortfolioArticle


// <article className="portfolioArticle carousel-item">
//            <a href={url} className="portfolioArticleLink carousel-item" id="portfolio">  <img src={image} alt={name}/> </a>
//            <p>{description}</p>
// </article>
// <a href={url} className="portfolioArticleLink carousel-item" id="portfolio">  <img src={image} alt={name}/> </a>