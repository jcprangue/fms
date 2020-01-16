import React, { Component } from "react";

class dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="sidebarIcon fas fa-tachometer-alt"></i>
                        Dashboard <span className="sr-only">(current)</span>
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default dashboard;
