import React from "react"
import ProjectCard from "./ProjectCard"
import projectOne from "../../images/projectOne.png"


class Projects extends React.Component {
    personalPortfolio = () => {
        this.props.history.push("projects/personal_portfolio")
    }
    render() {
        return (
            <div className="projects" >
                <ProjectCard title="Personal Portfolio" imgUrl={projectOne} onClick={this.personalPortfolio} />
            </div>
        )
    }
}

export default Projects