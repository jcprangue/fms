import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./font";
import NavBar from "./utils/navbar";
import SideBar from "./utils/sidebar";

// home components
import home from "./Home/index";
import systemUser from "./Users/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        };
    }


    render() {
        return (

            <div>
                <Router>
                    <NavBar />
                    <div className="container-fluid">
                        <div className="row">
                            <SideBar />
                            <main
                                role="main"
                                className="col-md-9 ml-sm-auto col-lg-10 px-4 main-body"
                            >
                                <Switch>
                                    <Route path="/" exact component={home}></Route>
                                    <Route path="/users" exact component={systemUser}></Route>
                                </Switch>
                            </main>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }


}

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
