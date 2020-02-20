import React from "react"
import projectOne from "../../images/projectOne.png"
import soon from "../../images/soon.png"
import bitShow from "../../images/bitShow.png"
import bitPeople from "../../images/bitPeople.png"
import ProjectCard from "./ProjectCard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
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
            <Container >
                <Row className="projectCardRow">
                    <Col xl={4} md={6} sm={12} >
                        <ProjectCard title="Personal Portfolio" imgUrl={projectOne} live="https://djordjevicmilan.com/" code="https://github.com/djolee96/portfolio" />
                    </Col>
                    <Col xl={4} md={6} sm={12} >
                        <ProjectCard title="BIT-People" imgUrl={bitPeople} live="http://bitpeople.djordjevicmilan.com/" code="https://github.com/djolee96/bit-people" />
                    </Col>
                    <Col xl={4} md={6} sm={12}>
                        <ProjectCard title="BIT-Show" imgUrl={bitShow} live="http://bitshows.djordjevicmilan.com/" code="https://github.com/djolee96/bit-show" />
                    </Col>
                    <Col xl={4} md={6} sm={12}>
                        <ProjectCard title="Renter-Soon" imgUrl={soon} last="last" />
                    </Col >
                </Row >
            </Container >
        )
    }
}

export default Projects