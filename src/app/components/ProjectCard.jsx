import React from "react"


class ProjectCard extends React.Component {

    render() {
        let { imgUrl, title, onClick } = this.props
        return (
            <div className="projectCard" onClick={onClick}>
                <div className="imgContainer">
                    <img src={imgUrl} alt="projectPicture" />
                </div>
                <h1>{title}</h1>
            </div>
        )
    }
}

export default ProjectCard