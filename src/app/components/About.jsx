import React from "react"
import TechCard from "./TechCard"
import { Link } from "react-router-dom"


class About extends React.Component {
    showInfo() {
        //side menu active 
        document.querySelector(".info").classList.add("active")
        document.querySelector(".tech").classList.remove("active")
        //hide aboutTech 
        document.querySelector(".aboutTech").classList.add("hide")
        document.querySelector(".aboutTech").classList.remove("show")
        //show aboutInfo 
        document.querySelector(".aboutInfo").classList.remove("hide")
        document.querySelector(".aboutInfo").classList.add("show")
    }
    showTech() {
        //side menu active 
        document.querySelector(".tech").classList.add("active")
        document.querySelector(".info").classList.remove("active")
        //hide aboutInfo
        document.querySelector(".aboutInfo").classList.add("hide")
        document.querySelector(".aboutInfo").classList.remove("show")
        //show aboutTech
        document.querySelector(".aboutTech").classList.remove("hide")
        document.querySelector(".aboutTech").classList.add("show")
    }

    render() {
        return (<div>
            <div className="sideMenu">
                <div className="info active" onClick={this.showInfo}>Info</div>
                <div className="tech" onClick={this.showTech}>Tech</div>
            </div>
            <div className="aboutInfo show">
                <h1>Info</h1>
                <p>Milan Đorđević is freelance Front-End Developer from Pančevo,Serbia.
                    <br />
                    Open for new Projects.

                    For more info about projects i done in past you can look up <Link to="projects" >here</Link>
                </p>
            </div>
            <div className="aboutTech hide">
                <h1>MY SKILLSET</h1>
                <TechCard />
            </div>
        </div>
        )
    }
}

export default About