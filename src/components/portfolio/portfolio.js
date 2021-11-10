import React from "react";
import Project1 from "../../images/portfolio-projects/project1.png"
import Project2 from "../../images/portfolio-projects/project2.png"
import Project3 from "../../images/portfolio-projects/project3.png"
import Project4 from "../../images/portfolio-projects/project4.png"
import Project5 from "../../images/portfolio-projects/project5.png"

export default function Portfolio() {
    return (
        <div>
            <h2 className="portfolio-heading" >My Portfolio</h2>
            <div className="projects">
                <img className="prt-img projects-img1" src={Project1} alt="project1" />
                <img className="prt-img projects-img3" src={Project3} alt="project1" />
                <img className="prt-img projects-img2" src={Project2} alt="project1" />
                <img className="prt-img projects-img4" src={Project4} alt="project1" />
                <img className="prt-img projects-img5" src={Project5} alt="project1" />

            </div>
        </div>);
}