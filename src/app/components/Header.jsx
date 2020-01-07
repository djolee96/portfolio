import React from "react"
import { Link } from "react-router-dom"
class Header extends React.Component {
    render() {
        return (
            <nav >
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="projects">Projects</Link></li>
                    {/* <li><Link to="hire_me">Hire Me</Link></li> */}
                </ul>
            </nav>
        )
    }
}

export default Header