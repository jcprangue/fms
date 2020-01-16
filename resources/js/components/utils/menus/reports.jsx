import React, { Component } from "react";

class ReportsMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="sidebarIcon fas fa-print"></i>
                        Reports
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default ReportsMenu;
