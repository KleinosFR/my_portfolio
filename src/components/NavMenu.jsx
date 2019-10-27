import React from "react"
import "./navMenu.css"
import profilePic from "../assets/img/stef2.jpg"



const NavMenu = () => {

return (
    <header>
        <div className="logo"></div>
        <nav className="navbarHidenMenu">Stéphane LAVAUD - Junior Web Developper - Welcome - Portfolio - About me - Contact me </nav>
  <ul id="slide-out" className="sidenav white darken-3">
    <li>
      <div className="user-view sidenav-close">
      <div className="background grey ligthen-2">
      </div>
        <a href="#intro"><img className="circle row" id="profilePic" src={profilePic} alt="Stéphane LAVAUD"/></a>
        <a href="#intro"><span className="white-text name">Stéphane LAVAUD</span></a>
        <a href="#intro"><span className="white-text">JS / React Junior Web Developper</span></a>
    </div></li>
    <li><a key="introNav" className="waves-effect blue-text text-lighten-2 sidenav-close" href="#intro"><i className="material-icons blue-text text-lighten-4">home</i>Welcome</a></li>
    <li><a key="portfolioNav" className="waves-effect blue-text text-lighten-2 sidenav-close" href="#portfolio"><i className="material-icons blue-text text-lighten-4">view_module</i>Portfolio</a></li>
    <li><a key="aboutNav" className="waves-effect blue-text text-lighten-2 sidenav-close" href="#about"> <i className="material-icons blue-text text-lighten-4">perm_identity</i>About me</a></li>
    <li><a key="contactNav" className="waves-effect blue-text text-lighten-2 sidenav-close" href="#contact"> <i className="material-icons blue-text text-lighten-4">mail</i>Contact me</a></li>
    
  </ul>
  <a href="#" data-target="slide-out" className="sidenav-trigger btn background blue lighten-4 black-text burgerIcon"><i className="material-icons">menu</i></a>
                    
    </header>




)




}

export default NavMenu