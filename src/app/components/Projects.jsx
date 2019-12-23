import React from "react"
import ProjectCard from "./ProjectCard"
import projectOne from "../../images/projectOne.png"


class Projects extends React.Component {

    render() {
        return (
            <div className="projects" >
                <ProjectCard title="Personal Portfolio" imgUrl={projectOne} />
            </div>
        )
    }
}

export default Projects