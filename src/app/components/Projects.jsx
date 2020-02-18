import React from "react"
import ProjectCard from "./ProjectCard"
import projectOne from "../../images/projectOne.png"
import soon from "../../images/soon.png"
import bitShow from "../../images/bitShow.png"
import bitPeople from "../../images/bitPeople.png"
class Projects extends React.Component {
    personalPortfolio = () => {
        this.props.history.push("projects/personal_portfolio")
    }
    bitPeople = () => {
        this.props.history.push("projects/bit-people")
    }
    bitShow = () => {
        this.props.history.push("projects/bit-show")
    }
    render() {
        return (
            <div className="projects" >
                <ProjectCard title="Personal Portfolio" imgUrl={projectOne} onClick={this.personalPortfolio} />
                <ProjectCard title="BIT-People" imgUrl={bitPeople} onClick={this.bitPeople} />
                <ProjectCard title="BIT-Show" imgUrl={bitShow} onClick={this.bitShow} />
                <ProjectCard title="Renter-Soon" imgUrl={soon} />
            </div>
        )
    }
}

export default Projects