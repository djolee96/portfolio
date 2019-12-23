import React from "react"


class ProjectCard extends React.Component {

    render() {
        let { imgUrl, title } = this.props
        return (
            <div className="projectCard">
                <div className="imgContainer">
                    <img src={imgUrl} alt="projectPicture" />
                </div>
                <h1>{title}</h1>
            </div>
        )
    }
}

export default ProjectCard