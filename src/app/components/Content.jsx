import React from "react"


class Content extends React.Component {
    componentDidMount() {
        if (this.props.match.url !== "/about") {
            document.querySelector(".footer").classList.remove("mobile")
        }
    }
    render() {
        return (
            <div className="content" >
                <h1>Milan Đorđević</h1>
                <h2>Front End Developer</h2>
            </div>
        )
    }
}

export default Content