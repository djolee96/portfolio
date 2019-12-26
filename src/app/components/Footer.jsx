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
                    <span> <a href="https://www.linkedin.com/in/milan-%C4%91or%C4%91evi%C4%8704/" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="li" /></a></span>
                    <span><a href="https://github.com/djolee96" rel="noopener noreferrer" target="_blank"> <img src={github} alt="github" /></a></span>
                </div>
            </div>
        )
    }
}

export default Footer