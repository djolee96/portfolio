import React from "react"
import TechCard from "./TechCard"
import { Link } from "react-router-dom"
import { showInfo, showTech } from "../shared/sideMenuSwitch"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class About extends React.Component {


    render() {
        return (<div>
            <div className="sideMenu">
                <div className="info active" onClick={showInfo}>Info</div>
                <div className="tech" onClick={showTech}>Tech</div>
            </div>
            <Container className="aboutInfo show">
                <Row className="InfoPosition">
                    <Col md={{ span: 6, offset: 1 }} xl={{ span: 7, offset: 0 }}>
                        <h1>Info</h1>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 0 }}>
                        <p>Milan Đorđević is freelance Front-End Developer from Pančevo,Serbia.
                    <br />
                            Open for new Projects.

                    For more info about projects i done in past you can look up <Link to="projects" >here</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="aboutTech hide">
                <Row className="skillPosition">
                    <Col md={{ span: 6, offset: 1 }} xl={{ span: 9, offset: 1 }} sm={12}>
                        <h1>MY SKILLSET</h1>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 0 }} sm={12}>

                        <TechCard />

                    </Col>
                </Row>
            </Container>
        </div >
        )
    }
}

export default About