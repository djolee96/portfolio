import React from "react"
import { Link } from "react-router-dom"
import home from "../../../icons/mobNav/home.png"
import about from "../../../icons/mobNav/about.png"
import projects from "../../../icons/mobNav/projects.png"
class NavMob extends React.Component {

    render() {
        if (this.props.page === "home") {
            return (
                <div>
                    <Link to="/"><img className="menuIcon" src={home} alt="home" /></Link>
                </div>
            )
        }
        else if (this.props.page === "about") {
            return (
                <div>
                    <Link to="about"><img className="menuIcon" src={about} alt="about" /></Link>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Link to="projects"><img className="menuIcon" src={projects} alt="projects" /></Link>
                </div>
            )
        }
    }
}

export default NavMob
