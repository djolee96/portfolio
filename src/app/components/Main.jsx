import React from "react"
import { Switch, Route } from "react-router-dom"
import Content from "./Content"
import About from "./About"
import Projects from "./Projects"
import HireMe from "./HireMe"

class Main extends React.Component {

    render() {
        return (
            <div className="main" >
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/hire_me" component={HireMe} />
                </Switch>
            </div>
        )
    }
}

export default Main