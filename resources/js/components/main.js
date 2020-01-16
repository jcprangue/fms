import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./font";
import NavBar from "./utils/navbar";
import SideBar from "./utils/sidebar";

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
                <NavBar />
                <SideBar />
            </div>
        );
    }
}

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
