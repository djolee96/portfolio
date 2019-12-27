import React from "react"
import Input from "./Input"
import CheckBox from "./CheckBox"
import DropDown from "./DropDown"

class HireMe extends React.Component {
    state = {
        //button
        view: true,
        //inputs
        name: "",
        email: "",
        website: "",
        newProject: false,
        redesign: false,
        timeline: "",
        staticSite: false,
        webApp: false,
        otherProject: false
    }
    //get input values
    getName = (e) => {
        this.setState({ name: e })
    }
    getEmail = (e) => {
        this.setState({ email: e })
    }
    getWebsite = (e) => {
        this.setState({ website: e })
    }
    getNewProject = (e) => {
        this.setState({ newProject: e })
    }
    getRedesign = (e) => {
        this.setState({ redesign: e })
    }
    getTimeline = (e) => {
        this.setState({ timeline: "" })
    }
    getStaticSite = (e) => {
        this.setState({ staticSite: e })
    }
    getWebApp = (e) => {
        this.setState({ webApp: e })
    }
    getOther = (e) => {
        this.setState({ otherProject: e })
    }
    onClickNext = () => {
        document.querySelector(".personal").classList.add("completed");
        this.setState({ view: false })
    }

    render() {

        const personal = <div className="personalInfo">
            <p>Name</p>
            <Input type="text" placeholder="" className="personalInput" onChange={this.getName} />
            <p>Email</p>
            <Input type="text" placeholder="" className="personalInput" onChange={this.getEmail} />
            <p>Website</p>
            <Input type="text" placeholder="if you have one" className="personalInput" onChange={this.getWebsite} />
            <button onClick={this.onClickNext} className="form-button">Next</button>
        </div>
        const project = <div className="projectDetails">
            <p>Is this is a new project or a redesign for an existing?</p>
            <CheckBox onChange={this.getNewProject} /><span>New Project</span>
            <CheckBox onChange={this.getRedesign} /><span>Redesign</span>
            <p>What can i help you with?</p>
            <CheckBox onChange={this.getStaticSite} /><span>Static site</span>
            <CheckBox onChange={this.getWebApp} /><span>Web app</span>
            <CheckBox onChange={this.getOther} /><span>Other</span>
            <p>Timeline-when do you need this completed by?</p>
            <DropDown onChange={this.getTimeline} className="projectDropdown"></DropDown>
            <button className="form-button">Send</button>
        </div>

        return (<div>
            <h1>Considering hiring me, fill the questionnaire.</h1>
            <p>Requesting an estimate for a project only takes a few minutes of your time and costs absolutely nothing.</p>
            <div className="hire-me">
                <button className="hire-me-button personal" onClick={() => this.setState({ view: true })}>Personal Info</button>
                <button className="hire-me-button project" onClick={() => this.setState({ view: false })}>Project Details</button>
                {this.state.view ? personal : project}
            </div >
        </div>
        )
    }
}

export default HireMe