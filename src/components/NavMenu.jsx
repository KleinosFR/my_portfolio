import React from "react"
import "./navMenu.css"



const NavMenu = () => {

return (
    <header>
        <div className="logo"></div>
        <nav className="navbarHidenMenu">Stéphane LAVAUD - Junior Web Developper - Welcome - Portfolio - About me - Contact me </nav>
  <ul id="slide-out" className="sidenav grey darken-3">
    <li><div className="user-view sidenav-close">
      <div className="background black">
        <img src="images/logo.jpg" alt="my logo"/>
      </div>
        <a href="#intro"><img className="circle" src="images/yuna.jpg" alt="profile picture"/></a>
        <a href="#intro"><span className="white-text name">Stéphane LAVAUD</span></a>
        <a href="#intro"><span className="white-text">JS / React Junior Web Developper</span></a>
    </div></li>
    <li><a className="waves-effect blue-text text-lighten-4 sidenav-close" href="#intro"><i className="material-icons blue-text text-lighten-4">home</i>Welcome</a></li>
    <li><div className="divider blue-text text-lighten-4"></div></li>
    <li><a className="waves-effect blue-text text-lighten-4 sidenav-close" href="#portfolio"><i className="material-icons blue-text text-lighten-4">view_module</i>Portfolio</a></li>
    <li><div className="divider"></div></li>
    <li><a className="waves-effect blue-text text-lighten-4 sidenav-close" href="#about"> <i className="material-icons blue-text text-lighten-4">mood</i>About me</a></li>
    <li><div className="divider"></div></li>
    <li><a className="waves-effect blue-text text-lighten-4 sidenav-close" href="#contact"> <i className="material-icons blue-text text-lighten-4">mail</i>Contact me</a></li>
    <li><div className="divider"></div></li>
    
  </ul>
  <a href="#" data-target="slide-out" className="sidenav-trigger btn background black"><i className="material-icons">menu</i></a>
                    
    </header>




)




}

export default NavMenu