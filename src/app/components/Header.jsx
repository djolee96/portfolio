import React from "react"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { Breakpoint } from 'react-socks';
import NavMob from "../components/mobileNav/NavMob"

class Header extends React.Component {
    render() {
        return (
            <Container bsPrefix="container mainNav">
                <Row>

                    <Col lg={{ span: 4, offset: 8 }} md={{ span: 6, offset: 6 }} sm={12} >

                        <Breakpoint medium up>
                            <Row>
                                <Col><Link to="/">Home</Link></Col>
                                <Col><Link to="about">About</Link></Col>
                                <Col><Link to="projects">Projects</Link></Col>
                            </Row>
                        </Breakpoint>

                        <Breakpoint small down>
                            <Row>
                                <Col><NavMob page="home" /></Col>
                                <Col><NavMob page="about" /></Col>
                                <Col><NavMob page="projects" /></Col>
                            </Row>
                        </Breakpoint>
                    </Col>


                </Row>
            </Container >
        )
    }
}

export default Header