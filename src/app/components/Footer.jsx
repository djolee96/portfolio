import React from "react"
import linkedin from "../../icons/linkedin.png"
import github from "../../icons/github-sign.png"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" >
                <div className="contact">
                    <h4>GET IN TOUCH</h4>
                    <p>Tel. +381 64 366 59 58</p>
                    <p>Email: milan.djordjevic@protonmail.com</p>
                </div>
                <div className="icons">
                    <span> <img src={linkedin} alt="li" /></span>
                    <span> <img src={github} alt="github" /></span>
                </div>
            </div>
        )
    }
}

export default Footer