import React, { Component } from "react";

class dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a
                        href="/home"
                        className={
                            this.props.activeValue === "Dashboard"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            this.props.setActive("Dashboard");
                        }}
                    >
                        <i className="sidebarIcon fas fa-tachometer-alt"></i>
                        Dashboard
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default dashboard;
