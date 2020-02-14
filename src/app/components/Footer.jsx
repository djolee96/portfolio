import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import linkedin from "../../icons/linkedin.png"
import github from "../../icons/github-sign.png"

class Footer extends React.Component {
    render() {
        return (
            <Container bsPrefix="container footer" >
                <Row>
                    <Col lg={{ span: 4, offset: 7 }} md={{ span: 6, offset: 4 }} sm={12}>
                        <div className="contact">
                            <h4>GET IN TOUCH</h4>
                            <p>Tel.  <a href="tel:+381643665958"> +381 64 366 59 58</a></p>
                            <p>Email:   <a href="mailto:milan.djordjevic@protonmail.com">milan.djordjevic@protonmail.com</a> </p>
                        </div>
                    </Col>
                    <Col lg={1} md={2} sm={12}>
                        <div className="icons">
                            <span> <a href="https://www.linkedin.com/in/milan-%C4%91or%C4%91evi%C4%8704/" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="li" /></a></span>
                            <span><a href="https://github.com/djolee96" rel="noopener noreferrer" target="_blank"> <img src={github} alt="github" /></a></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer