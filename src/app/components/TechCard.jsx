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

class TechCard extends React.Component {

    render() {
        return (
            <div>
                <div className="techCard">
                    <img src={react} alt="fb" />
                    <p>React</p>
                </div>
                <div className="techCard">
                    <img src={js} alt="fb" />
                    <p>JavaScript</p>
                </div>
                <div className="techCard">
                    <img src={css} alt="fb" />
                    <p>Css3</p>
                </div>
                <div className="techCard">
                    <img src={html} alt="fb" />
                    <p>Html5</p>
                </div>
                <div className="techCard">
                    <img src={bootstrap} alt="fb" />
                    <p>Bootstrap</p>
                </div>
                <div className="techCard">
                    <img src={sass} alt="fb" />
                    <p>Sass</p>
                </div>
                <div className="techCard">
                    <img src={jquery} alt="fb" />
                    <p>jQuery</p>
                </div>
                <div className="techCard">
                    <img src={git} alt="fb" />
                    <p>Git</p>
                </div>
                <div className="techCard">
                    <img src={npm} alt="fb" />
                    <p>NPM</p>
                </div>
            </div >
        )
    }
}

export default TechCard