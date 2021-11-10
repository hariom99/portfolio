import React from "react";
import nav from "../../../images/nav.png";




export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo" > Hariom Kourav</div>
            <div className="navbar-links" >
                <ul>
                    <li >Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>


            </div>

            <div className="responsive-nav" >


                <a className="nav-link drowpdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="" src={nav} alt="nav" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" to="#home">Home</a>
                    <a className="dropdown-item" to="#about">About</a>
                    <a className="dropdown-item" href="#portfolio">Portfolio</a>
                    <a className="dropdown-item" href="#resume">Resume</a>
                    <a className="dropdown-item" href="#contact">Contact</a>

                </div>



            </div>





        </div>
    );
}