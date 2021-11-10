import React from "react";
import HtmlImg from "../../images/html-img.png"
import CssImg from "../../images/css-img.png"
import BootstrapImg from "../../images/bootstrap-img.png"
import GithubImg from "../../images/github-img.png"
import JsImg from "../../images/js-img.jpg"
import JavaImg from "../../images/java-img.svg"
import NetlifyImg from "../../images/netlify-img.png"
export default function About() {
    return (
        <div className="about">
            <div className="about-img">
            </div>
            <div className="about-text" >
                <h2 id="about" className="about-heading" >About Me</h2>
                <p>
                    I'm a web designer & front end developer.
                    I'm interested in all kinds of visual
                    communication, but my major focus is on web designing , mobile and
                    tablet interfaces. I also have skills in other fields
                    like branding, icon design or web development.
                </p>

                <p>
                    I'm having good analytical and problem solving skills.


                </p>

                <div id="about" className="skills-banner" >
                    <img className="img" src={HtmlImg} alt="hii" />
                    <img className="img" src={CssImg} alt="hii" />
                    <img className="img" src={JsImg} alt="hii" />
                    <img className="img" src={BootstrapImg} alt="hii" />
                    <img className="img" src={GithubImg} alt="hii" />
                    <img className="img" src={JavaImg} alt="hii" />
                    <img className="img" src={NetlifyImg} alt="hii" />
                </div>
            </div>
        </div>
    );
}