import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ProjectCard extends React.Component {
    render() {
        const { last = "" } = this.props
        return (<Card className={`projectCard ${last}`} bg="dark" text="white" border="primary" style={{ width: '17rem' }}>
            <Card.Img variant="top" src={this.props.imgUrl} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Button className="projectButton" size="sm" href={this.props.live} target="_blank" rel="noopener noreferrer" >View Project</Button>
                <Button size="sm" href={this.props.code} target="_blank" rel="noopener noreferrer" >View Code</Button>
            </Card.Body>
        </Card>)
    }
}

export default ProjectCard