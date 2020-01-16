import React, { Component } from "react";

class ProgramMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="sidebarIcon fas fa-cogs"></i>
                        Program Settings
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default ProgramMenu;
