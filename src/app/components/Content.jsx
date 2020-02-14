import React from "react"
import Footer from "./Footer"

class Content extends React.Component {
    render() {
        return (<div>
            <div className="content" >
                <h1>Milan Đorđević</h1>
                <h2>Front End Developer</h2>
            </div>
            <Footer />
        </div>
        )
    }
}

export default Content