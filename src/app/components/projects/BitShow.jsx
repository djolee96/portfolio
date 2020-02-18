import React from "react"
import bitShow from "../../../images/bitShow.png"
import react from "../../../icons/techicons/react.png"
import sass from "../../../icons/techicons/sass.png"
import bootstrap from "../../../icons/techicons/bootstrap.png"
class BitShow extends React.Component {

    render() {
        return (
            <div className="detailed_card">
                <div className="project-preview">
                    <div className="imgContainer">
                        <img src={bitShow} alt="bitShow" />
                    </div>
                    <h1>Bit Show</h1>
                    <h3>Description</h3>
                    <p>This project is built for learning purposes</p>

                </div>
                <div className="project-description">
                    <h3>Technology used</h3>
                    <div>
                        <div className="techCard-small">
                            <img src={react} alt="react" />
                            <p>React</p>
                        </div>
                        <div className="techCard-small">
                            <img src={sass} alt="SASS" />
                            <p>Sass</p>
                        </div>
                        <div className="techCard-small">
                            <img src={bootstrap} alt="bootstrap" />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                    <a href="https://djordjevicmilan.com/" target="_blank" rel="noopener noreferrer" >View Live-soon</a>
                    <a href="https://github.com/djolee96/bit-show" target="_blank" rel="noopener noreferrer" >View Code</a>


                </div>
            </div>
        )
    }
}

export default BitShow