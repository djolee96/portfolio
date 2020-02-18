import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Content from "./Content"
import About from "./About"
import Projects from "./Projects"
// import HireMe from "./HireMe"
import PersonalPortfolio from "./projects/PersonalPortfolio"
import BitShow from "./projects/BitShow"
import BitPeople from "./projects/BitPeople"
class Main extends React.Component {
    render() {
        return (
            <div className="main" >
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    {/* <Route exact path="/hire_me" component={HireMe} /> */}
                    <Route exact path="/projects/personal_portfolio" component={PersonalPortfolio} />
                    <Route exact path="/projects/bit-show" component={BitShow} />
                    <Route exact path="/projects/bit-people" component={BitPeople} />
                    <Redirect from="/projects/about" to="/about" />
                    <Redirect from="/projects/hire_me" to="/hire_me" />
                    <Redirect from="/projects/projects" to="/projects" />
                </Switch>
            </div>
        )
    }
}

export default Main