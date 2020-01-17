import React, { Component } from "react";

class ReportsMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a
                        href="#"
                        className={
                            this.props.activeValue === "ReportMenu"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            this.props.setActive("ReportMenu");
                        }}
                    >
                        <i className="sidebarIcon fas fa-print"></i>
                        Reports
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default ReportsMenu;
