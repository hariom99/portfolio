import React from "react";
import Desert from "../../images/resume-images/dessert.png";
import Backtracking from "../../images/resume-images/backtracking.png"
import TodoWeb from "../../images/resume-images/todoweb.png"
import Todomob from "../../images/resume-images/todomob.png"
import Clock from "../../images/resume-images/clock.png"





export default function Resume() {
    return (
        <>
            <h2 id="resume" className="portfolio-heading" >Resume</h2>
            <div className="resume-container" >
                <div className="resume">

                    <h2>Educational Details</h2>
                    <div>
                        <ul>
                            <li><h3>10 class</h3>
                                <p>Narsingh public school Narsinghpur</p>
                                <p>Year : 2015</p>
                            </li>
                            <li><h3>12 class</h3>
                                <p>Narsingh public school Narsinghpur</p>
                                <p>Year : 2017</p>
                            </li>
                            <li><h3>B.Tech</h3>
                                <p>Technocrats Institute of Techmology And science Bhopal</p>
                                <p>Year : 2021</p>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="resume-img" >
                    <img src="https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhhbmRzJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img lp" />
                </div>

                <div className="prj">
                    <center><h3  >Projects</h3></center>
                    <div className="resume-projects" >

                        <a href="https://hariom99.github.io/prep_project/" >
                            <img className="r-img" src={Backtracking} alt="backtracking" />
                        </a>
                        <a href="https://hariom99.github.io/project4_clock/" >
                            <img className="r-img" src={Clock} alt="desert" />
                        </a>
                        <a href="https://hariom99.github.io/css-5/" >
                            <img className="r-img" src={Desert} alt="desert" />
                        </a>
                        <a href="https://hariom99.github.io/project2/" >
                            <img className="r-img" src={TodoWeb} alt="desert" />
                        </a>
                        <a href="https://hariom99.github.io/project3/" >
                            <img className="r-img" src={Todomob} alt="desert" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}