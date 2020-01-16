import React, { Component } from "react";

class fileMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="sidebarIcon fas fa-file"></i>
                        &nbsp;Records
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default fileMenu;
