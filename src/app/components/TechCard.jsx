import React from "react"
import js from "../../icons/techicons/js.png"
import css from "../../icons/techicons/css3.png"
import html from "../../icons/techicons/html5.png"
import bootstrap from "../../icons/techicons/bootstrap.png"
import sass from "../../icons/techicons/sass.png"
import jquery from "../../icons/techicons/jquery.png"
import git from "../../icons/techicons/git.png"
import npm from "../../icons/techicons/npm.png"
import react from "../../icons/techicons/react.png"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
class TechCard extends React.Component {

    render() {
        return (
            <Row >
                <Col xl={4} md={{ span: 4, offset: 0 }} sm={4} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={react} alt="fb" />
                        <p>React</p>
                    </div>
                </Col>
                <Col xl={4} md={{ span: 4, offset: 0 }} sm={4} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={js} alt="fb" />
                        <p>JavaScript</p>
                    </div>
                </Col>
                <Col xl={4} md={{ span: 4, offset: 0 }} sm={4} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={css} alt="fb" />
                        <p>Css3</p>
                    </div>
                </Col>
                <Col xl={4} md={{ span: 4, offset: 0 }} sm={4} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={html} alt="fb" />
                        <p>Html5</p>
                    </div>
                </Col>
                <Col xl={4} md={{ span: 4, offset: 0 }} sm={4} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={bootstrap} alt="fb" />
                        <p>Bootstrap</p>
                    </div>
                </Col>
                <Col xl={4} md={{ span: 4, offset: 0 }} sm={4} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={sass} alt="fb" />
                        <p>Sass</p>
                    </div>
                </Col>
                <Col xl={4} md={4} sm={{ span: 4, offset: 0 }} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={jquery} alt="fb" />
                        <p>jQuery</p>
                    </div>
                </Col>
                <Col xl={4} md={4} sm={{ span: 4, offset: 0 }} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={git} alt="fb" />
                        <p>Git</p>
                    </div>
                </Col>
                <Col xl={4} md={{ span: 4, offset: 0 }} sm={4} xs={{ span: 3, offset: 1 }}>
                    <div className="techCard">
                        <img src={npm} alt="fb" />
                        <p>NPM</p>
                    </div>
                </Col>
            </Row >
        )
    }
}

export default TechCard