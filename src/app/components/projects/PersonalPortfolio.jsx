import React from "react"
import projectOne from "../../../images/projectOne.png"
import react from "../../../icons/techicons/react.png"
import sass from "../../../icons/techicons/sass.png"

class PersonalPortfolio extends React.Component {

    render() {
        return (
            <div className="detailed_card">
                <div className="project-preview">
                    <div className="imgContainer">
                        <img src={projectOne} alt="portfolio" />
                    </div>
                    <h1>Personal Portfolio</h1>
                    <h3>Description</h3>
                    <p>This project is online presentation for Front-End Developer. Displaying info, skills and easy way to contact developer. </p>

                </div>
                <div className="project-description">
                    <h3>Technology used</h3>
                    <div>
                        <div className="techCard-small">
                            <img src={react} alt="react" />
                            <p>React</p>
                        </div>
                        <div className="techCard-small">
                            <img src={sass} alt="SASS" />
                            <p>Sass</p>
                        </div>
                    </div>
                    <a href="https://djordjevicmilan.com/" target="_blank" rel="noopener noreferrer" >View Live</a>
                    <a href="https://github.com/djolee96/portfolio" target="_blank" rel="noopener noreferrer" >View Code</a>


                </div>
            </div>
        )
    }
}

export default PersonalPortfolio